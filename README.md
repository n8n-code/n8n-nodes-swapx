# @n8n-dev/n8n-nodes-swapx

![swapx Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-swapx.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-swapx)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing swapx API integrations by hand.**

Every time you connect n8n to swapx, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to swapx took 5 minutes, not half a day?**

This node gives you **1+ resources** out of the box: **Default**: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-swapx
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-swapx`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **swapx API** → paste your API key
3. Drag the **swapx** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Default</b> (7 operations)</summary>

- Get Mint Proof
- Get Airdrop Proof
- Get Partners Proof
- Get Partners Proof
- Get Partners Proof
- Get Founders Proof
- Get Token Metadata

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from swapx docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official swapx OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **swapx** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the swapx API updates, this node updates too.

---


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
