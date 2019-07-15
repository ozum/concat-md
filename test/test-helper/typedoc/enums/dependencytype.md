---
id: dependencytype
title: DependencyType
sidebar_label: DependencyType
---

# Enumeration: DependencyType

Dependency types for Node.js modules.

## Enumeration members

###  Dependencies

• **Dependencies**: = "dependencies"

*Defined in [types/index.ts:110](https://github.com/ozum/intermodular/blob/4dd044c/src/types/index.ts#L110)*

Production dependencies

___

###  DevDependencies

• **DevDependencies**: = "devDependencies"

*Defined in [types/index.ts:114](https://github.com/ozum/intermodular/blob/4dd044c/src/types/index.ts#L114)*

Dependencies for development only.

___

###  OptionalDependencies

• **OptionalDependencies**: = "optionalDependencies"

*Defined in [types/index.ts:123](https://github.com/ozum/intermodular/blob/4dd044c/src/types/index.ts#L123)*

Dependencies which can be used, but not stop installation if not found or failed to install.

___

###  PeerDependencies

• **PeerDependencies**: = "peerDependencies"

*Defined in [types/index.ts:118](https://github.com/ozum/intermodular/blob/4dd044c/src/types/index.ts#L118)*

Dependencies which are not installed by default.