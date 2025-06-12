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

## Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)
- **SAP UI5 CLI** (installed via npm)

## Installation & Setup

1. **Clone the repository** (if applicable):
   ```bash
   git clone [repository-url]
   cd FioriFinalTest/materialprocuremet
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Verify TypeScript installation**:
   ```bash
   npx tsc --version
   ```

## Running the Application

### Development Mode
```bash
npm run start
```
This will start the application in development mode and open it in your default browser at the Fiori Launchpad.

### Local Development (without Fiori Launchpad)
```bash
npm run start-noflp
```

### With Mock Data
```bash
npm run start-mock
```

### Local Configuration
```bash
npm run start-local
```

## Build & Deployment

### Build for Production
```bash
npm run build
```

### Deploy
```bash
npm run deploy
```

### Configure Deployment
```bash
npm run deploy-config
```

## Development Scripts

- `npm run lint` - Run ESLint to check code quality
- `npm run ts-typecheck` - Run TypeScript type checking
- `npm run build` - Build the application for production
- `npm run start-variants-management` - Start with variants management preview

## Features Demonstrated

This Final Test project showcases:

1. **SAP UI5 Development**: Modern UI5 application structure and patterns
2. **TypeScript Integration**: Type-safe development with SAP UI5
3. **Enterprise Patterns**: Implementation of common ERP workflows
4. **Fiori Design Guidelines**: Adherence to SAP Fiori UX principles
5. **Build & Deployment**: Professional build and deployment processes
6. **Code Quality**: ESLint integration and TypeScript type checking

## Learning Objectives

This project demonstrates proficiency in:
- SAP UI5/OpenUI5 framework development
- TypeScript for enterprise JavaScript development
- SAP Fiori design principles and UX patterns
- Enterprise application architecture
- Build tooling and deployment processes
- ERP business process understanding

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

## Contact & Support

This is a Final Test project for ERP Programming coursework. For questions or issues related to the academic assessment, please contact the course instructor.

---

**Note**: This application is developed as part of an academic Final Test for ERP Programming and demonstrates the implementation of enterprise-level procurement processes using modern SAP technologies.
