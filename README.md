# FST_SECURITY_IP_AGENT — AI Engineering Suite for CSME
=====================================================

> _An AI-powered suite of tools for **ramp-up, training, design, and validation** of Intel's Converged Security and Manageability Engine (CSME)._

This repository hosts a collection of AI agents and supporting documentation designed to accelerate engineering tasks and guide both new and experienced engineers working on critical security IPs.

---

### Purpose
-------

The primary goal of this project is to serve as a multi-faceted AI-powered toolkit that enhances productivity and simplifies complexity for anyone involved with CSME. It is built on four key pillars:

- **<ins>Ramp-up & Training</ins>**: Provides a guided learning path for new engineers, helping them quickly understand the CSME architecture, key sub-IPs, and design/validation methodologies.
- **<ins>Design Agent</ins>**: An AI assistant to help with architectural exploration, RTL creation, and refining design specifications. It can suggest micro-architectural improvements and generate boilerplate code.
- **<ins>Validation Agent</ins>**: A specialized agent that acts as a senior verification advisor. It assists with creating verification plans, SystemVerilog Assertions (SVA), UVM components, and debugging strategies.
- **<ins>Knowledge Hub</ins>**: A centralized, AI-searchable knowledge base built from the documentation within this repository.

### Key Components
----------------

- **`CSME_Overview.md`**: The foundational document detailing the CSME architecture, its major sub-IPs, and their interactions. This serves as the primary context for all agents.
- **AI Agents**:
  - **Validation Agent**:
    - _Persona_: `agent/VALIDATION_AGENT_PERSONA.md`
    - _Chat Mode_: `.github/chatmodes/VAL_SECURITY_IP_AGENT.chatmode.md`
  - **Design Agent**: <sup>(Coming Soon)</sup>
  - **Training Bot**: <sup>(Coming Soon)</sup>

### How to Use
------------

#### For New Engineers (Ramp-up & Training)
1.  Start by reading `CSME_Overview.md` to get a foundational understanding.
2.  Engage with the **VAL Security IP Agent** and ask it to explain concepts, generate ramp-up plans, or define key terms. For example:
    - _"Explain the role of the Gasket in CSME."_
    - _"Generate a 30/60/90 day ramp-up plan for a new validator."_

#### For Design Engineers
- Use the available agents to validate your design intent by requesting formal properties and test scenarios.
- Provide interface descriptions to get targeted assertions and architectural feedback.
- _(The dedicated **Design Agent** will offer more advanced capabilities in the future)._

#### For Validation Engineers
1.  Initiate a chat session with the **VAL Security IP Agent**.
2.  Make concrete requests to accelerate your verification tasks:
    - _"Create SVA assertions to validate DMA descriptor safety in the OCS."_
    - _"Draft a UVM test plan for Gasket's access-control registers."_

### Agent Behavior & Safety
-----------------------

- Each agent adopts its defined persona and relies on the repository's documentation for context.
- The agents will **never** request or reveal secrets or PII. Requests for restricted content will be met with high-level guidance and a refusal to share sensitive details.

### Contributing
------------

- **Expand the knowledge base**: Add or update `CSME_Overview.md` and other documents to improve the agents' accuracy.
- **Develop new agents**: Create personas and chat modes for new roles (e.g., a Design Agent).
- **Add examples**: Contribute UVM sequences, SVA assertions, or design snippets to an `examples/` directory.

### Roadmap & Future Ideas
--------------------

- Develop and integrate a dedicated **Design Agent** persona and chat mode.
- Create interactive **training modules** in the form of Jupyter notebooks.
- Build a script to automatically validate documentation consistency.
- Integrate diagrams (<sup>SVG</sup>) to visualize architecture, fabrics, and data flows.

---

For any questions about this repository or to request privileged documentation, please follow your organization's established process for obtaining access.
