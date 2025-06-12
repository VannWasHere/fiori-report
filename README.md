# Material Procurement Application - ERP Programming Final Test

## Overview

This is a **Final Test project for ERP Programming** using SAP technologies. The application is a Material Procurement system built with SAP UI5/OpenUI5 framework, designed to demonstrate enterprise-level development skills and understanding of SAP business processes.

## Anggota Kelompok

- **Yohanes Adrian Emmanuel** - 00000092259 (Ketua Kelompok)
- **Gabriel Valerio** - 00000094207
- **Justine Donovan** - 00000063202
- **Axel Lionel Raphael** - 00000092899
- **Jodianto** - 00000095327

**Kelas:** ERP Programming / IS 539 / LAB

## Application Description

The **Material Procurement Application** is an enterprise resource planning (ERP) solution that manages and streamlines the procurement process for materials and supplies. This application provides functionality for:

- **Material Management**: Browse, search, and manage material catalogs
- **Procurement Workflows**: Handle purchase requisitions and orders
- **Vendor Management**: Manage supplier information and relationships
- **Inventory Tracking**: Monitor stock levels and procurement status
- **Approval Processes**: Implement business approval workflows
- **Reporting & Analytics**: Generate procurement reports and insights

## Technical Stack

- **Frontend Framework**: SAP UI5 / OpenUI5
- **Language**: TypeScript
- **Build Tools**: UI5 CLI, UI5 Tooling
- **Development Environment**: SAP Fiori Tools
- **Linting**: ESLint with TypeScript support
- **Testing**: Fiori Launchpad integration

## Project Structure

```
materialprocuremet/
├── webapp/                 # Main application source code
├── test/                   # Test files and configurations
├── node_modules/           # Dependencies
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── ui5.yaml              # UI5 build configuration
├── ui5-local.yaml        # Local development configuration
├── ui5-mock.yaml         # Mock server configuration
└── README.md             # This file
```
## Troubleshooting

### Common Issues

**TypeScript Compiler Not Found**:
```bash
npm install
npx tsc --version
```

**Build Errors**:
```bash
npm run lint
npm run ts-typecheck
```

**Port Already in Use**:
Change the port in the ui5.yaml file or kill the process using the port.

---

**Note**: This application is developed as part of an academic Final Test for ERP Programming and demonstrates the implementation of enterprise-level procurement processes using modern SAP technologies.
