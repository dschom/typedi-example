# Proposed DI Archecture

This is small POC / illustration for how to cleanly do DI in auth-server. There's a few considerations here.

1. We want to ensure all DI is correctly registered at start up
2. We want to avoid any circular dependences
3. We want to ensure testing is straight forward
4. We want to avoid the service locator anti pattern
5. We want to create a migration path that promotes using DI even in legacy js classes
6. We want to create a migration path that supports idiomatic typescript patterns

# Npm Scripts

## test
Run `npm test`. Currently devices is under test with an example for how to easily mock the DI.

## deps
Outputs a graph of the module dependency tree. A bit of tinkering was done to ensure we didn't create
bi-directional dependencies going forward. One thing to not, the extraction of the service into device.service is key
to preventing bi-directional dependencies.

## run
Actually runs the code. The main point here is that it starts up cleanly. You can try uncommenting code to see the 
side effect of improper ci configuration.

## lint
This ensures that Container.get and Container.set are only used in the di-registry. This guards against the service
locator anti-pattern, and ensures clean DI moving forward.

## build
Compiles the typescript.

# Other comments

Search for comments with `EXP:` to tinker with the effects of improper di patterns. Our linter should catch them.

