# FST_SECURITY_IP_AGENT — VAL Security IP Agent

This repository hosts a Validation Security IP Agent and supporting documentation for CSME (Converged Security and Manageability Engine) validation and design collaboration.

## Purpose

Provide an in-repo validation assistant for CSME sub-IPs (OCS, Gasket, HECI, etc.) that:

- Acts as a senior validation advisor persona (UVM/OVM, SVA, formal verification expertise).
- Uses repository documentation (`CSME_Overview.md`, `agent/VALIDATION_AGENT_PERSONA.md`) as canonical context.
- Helps validators (junior and senior) with verification plans, assertions, UVM sequences, debugging checklists, and ramp-up guides.

## Key files

- `CSME_Overview.md` — Architecture-level overview of CSME, major sub-IPs, interactions, and design notes. Use this as the primary context for architecture and mapping verification tasks.
- `agent/VALIDATION_AGENT_PERSONA.md` — Persona used by the validation agent (Spanish). Explains tone, skills, and suggested outputs.
- `.github/chatmodes/VAL_SECURITY_IP_AGENT.chatmode.md` — Chat-mode configuration that instructs the agent to load the persona and `CSME_Overview.md` at startup.

## How to use (for validators)

1. Open the repository in your editor and review `CSME_Overview.md` to understand the high-level architecture.
2. Start a chat session with the VAL Security IP Agent (via your integrated chat tooling) using the `VAL_SECURITY_IP_AGENT` chat mode.
3. Ask concrete requests. Good examples:
   - "Create SVA assertions to validate DMA descriptor safety in the OCS."
   - "Draft a UVM test plan for Gasket's access-control registers."
   - "Generate a 30/60/90 ramp-up plan for a new validator."
4. If you require register-level or internal documentation that is not present here, request access through official channels; the agent will provide conceptual examples instead.

## How to use (for designers)

- Use the agent to validate your design intent by requesting formal properties, coverage goals, and test scenarios.
- Provide the agent with interface descriptions or example RTL snippets (non-confidential) to get targeted assertions and UVM sequences.

## Agent behavior & safety

- The agent adopts the persona defined in `agent/VALIDATION_AGENT_PERSONA.md` and uses `CSME_Overview.md` for technical context.
- It will not request or reveal secrets or PII. It will refuse or limit responses when asked for restricted content and will instead provide high-level guidance.

## Contributing

- Add or update the `CSME_Overview.md` and persona files to keep context accurate.
- If you extend the agent behavior, update `.github/chatmodes/VAL_SECURITY_IP_AGENT.chatmode.md` accordingly.

## Next steps and ideas

- Add example UVM sequences and SVA assertions in an `examples/` directory.
- Add automated validation scripts that run quick lint and assertion checks against example RTL.
- Include diagrams (SVG) showing fabrics and data flows.

---

For questions about this repository or to request privileged documentation, follow your organization's process for obtaining access.
