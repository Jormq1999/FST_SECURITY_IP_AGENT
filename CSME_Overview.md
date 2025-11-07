# Intel Converged Security and Manageability Engine (CSME) — Overview

This document explains the Intel Converged Security and Manageability Engine (CSME) and its major sub-IPs (subsystems), including the Offload & Crypto Subsystem (OCS), the Gasket interface, and other important blocks. The content is written in clear, structured English to help engineers and reviewers understand the architecture, responsibilities, key data flows, and notable design details.

## Purpose and high-level role

CSME is a security and management subsystem integrated into Intel chipsets. It runs a privileged, isolated firmware environment that performs platform security functions, cryptographic operations, manageability services, and attestation. CSME has its own processor(s), memory, and internal fabrics. It interfaces with the rest of the SoC through defined bridges and secure interfaces.

## Document contract

- Inputs: platform host, firmware images, external peripherals, and fuse/eFuse values.
- Outputs: cryptographic services, attestation statements, secure storage, management commands and events to host, and hardware-assisted isolation.
- Success criteria: confidentiality and integrity of security operations; reliable communication with host; correct handling of resets/power transitions.
- Error modes: firmware faults, bus/bridge faults, power domain transitions, and DMA misconfiguration.

## Key blocks (sub-IPs) and responsibilities

### 1. MinuteIA (mIA)
- Embedded CPU core used as CSME's main execution engine (often an Atom-derived microcontroller core).
- Executes CSME firmware and orchestrates operations across internal subsystems.
- Interfaces with internal fabric and can receive MSI/NMI and other interrupts.

Design notes:
- Manages firmware tasks, scheduling, and security-sensitive state.
- Has private registers and may include an internal LAPIC-like interrupt controller.

### 2. MinuteIA System Agent (MISA)
- Manages memory access and coherency for mIA and internal memory (SRAM).
- Implements access control, cache coherency policies, and memory protection units.
- Contains sub-units for access gating, address translation helpers, and LRU/coherency state.

Design notes:
- Provides a secure boundary to prevent host or DMA from corrupting CSME-private memory.

### 3. SRAM and ROM controller
- Provides storage for firmware and runtime data.
- ROM stores boot code and immutable data; SRAM is used for dynamic data and stack/heap.

Design notes:
- Controllers enforce access permissions and isolation.

### 4. Offload & Crypto Subsystem (OCS)
- Hardware accelerators and DMA controllers for cryptographic primitives and data movement.
- Typical engines: AES, SHA, HMAC, RSA/PK, random number generation, and key storage (SKS).
- DMA engines allow large transfers between DRAM, SRAM, and peripherals without CPU involvement.

Design notes:
- OCS offloads heavy crypto from mIA, enabling performance and side-channel mitigation.
- OCS integrates with secure key stores and may implement hardware protections for keys.

### 5. Gasket (GSK)
- The main interface block between CSME and other SoC components (host CPU, PSF, and external fabrics).
- Implements address mapping, transaction filtering, sideband signaling, and proxying for GPIO/interrupts.
- Responsible for transaction translation (host address space to internal CSME space) and enforcing security/access policies.

Design notes:
- Gasket enforces bus-level access controls and participates in power/reset domain crossings.
- It mediates access to fuses, boot configuration registers, and host-visible error/status registers.

### 6. Communication interfaces and proxies
- HECI/MEI: Host Embedded Controller Interface for command and control messaging between host firmware/OS and CSME.
- GPIO proxy: allows external GPIO events to be delivered to CSME as interrupts or events.
- PCI/Sideband: sideband channels for control/status exchanges.

Design notes:
- HECI is the typical channel for management, attestation, and provisioning flows.

### 7. Fabric and bridges (CFI, LFI, PSF)
- Internal fabrics connect mIA, OCS, Gasket, and other sub-IP blocks.
- Bridges translate between fabrics and outside fabrics (PSF) and manage address/view mapping and resets.

Design notes:
- Bridges isolate reset and power domains and perform address translation and access filtering.

### 8. Power & reset management
- Multiple power domains and reset domains allow selective power gating and retention.
- Logic for save/restore and retention of security state when parts of the SoC are power-gated.

Design notes:
- Power transitions are security-sensitive; state must be handled to avoid leakage or replay attacks.

### 9. fTPM and security services
- Firmware TPM (fTPM) implementation for secure key storage, attestation, and platform integrity reports.
- Secure key storage (SKS) for non-exportable keys.

Design notes:
- fTPM may use OCS for crypto and Gasket/HECI for host communication.

### 10. GPIO/IRQ handling (GPIC/UGPIC)
- Blocks that capture external interrupts and convert or route them to mIA.
- Provide masking, prioritization, and proxying.

Design notes:
- Useful for events like user buttons, wake signals, or other platform events.

## Interactions and data flows

### Typical boot and handshake
1. ROM executes first-stage boot code and initializes SRAM and mIA.
2. mIA configures MISA, Gasket, and OCS, and initializes key stores and crypto engines.
3. Gasket programs host-visible mappings, fuse-based policies, and sideband proxies.
4. HECI is brought up to allow the host to communicate with CSME for provisioning and management.

### Crypto offload and DMA flow
- Host or mIA requests a crypto operation.
- OCS receives a descriptor and/or DMA work item, fetches data via DMA from DRAM/SRAM, processes it in crypto engines, and writes back results.
- OCS signals completion to mIA by interrupt (MSI) or sets status registers visible through Gasket.

### Host transaction flow through Gasket
- Host writes to an address mapped by Gasket targeting CSME.
- Gasket validates the access (permissions, lock states), then forwards the transaction into CSME fabric to the intended sub-IP (e.g., registers in MISA, HECI mailbox, fuse controller).
- Responses are translated back and returned to host.

## Design constraints and edge cases

- DMA attacks: ensure OCS/DMA controllers validate descriptors and cannot be made to access forbidden ranges.
- Power/Reset races: saving state across power transitions must be atomic or accompanied by secure versioning.
- Fault containment: a faulty firmware task should not corrupt global secure state; memory partitioning and MPU features are critical.

## Examples and concrete registers (conceptual)
- Boot status register: indicates boot stage, verified firmware version, and measured hashes.
- Gasket access control registers: per-host-client permission bits and lock bits.
- OCS descriptor ring: head/tail pointers and status bits for HW/SW coordination.

## Glossary
- mIA: MinuteIA (CSME CPU core)
- MISA: mIA System Agent
- OCS: Offload & Crypto Subsystem
- Gasket/GSK: Host interface/mapping block
- HECI/MEI: Host Embedded Controller Interface / Management Engine Interface
- PSF: Platform Services Fabric

## References
- Internal Intel IP documentation and CSME architecture chapters (for deeper protocol and register-level details).

---

Created for the FST Security IP Agent workspace. If you want more detailed tables, diagrams, or register-level examples for any block (Gasket, OCS, HECI), tell me which block and I will expand it.

## Getting more information

If you need deeper or more specific details (for example, register maps, code-signing policy, or design rationale), you can request them from the agent by including the tag `@ask_codesign` in your message. The agent will respond with targeted information about code signing, verification steps, and how CSME components (such as the Gasket and OCS) participate in secure boot and firmware authentication.

Note: some internal or sensitive details may be restricted; when that happens the agent will provide the highest-level allowed information and suggest steps to obtain privileged documentation.
