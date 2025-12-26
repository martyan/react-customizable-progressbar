# [2.1.2] - 2025-12-26

## Fixes
- Fix types export

# [2.1.1] - 2025-07-09

## Fixes
- React 19 - TypeError - Cannot read properties of undefined (reading 'recentlyCreatedOwnerStacks') #54

# [2.1.0] - 2025-06-10

## Features
- Added support for React 19
- Updated peerDependencies to include React ^19.0.0

# [2.0.1] - 2024-10-26

## Fixes
- Fixed module entry in package.json.
- Fixed generating of types file.

# [2.0.0] - 2024-08-04

## Breaking Changes
- Dropped support for React versions 0.14.0 and 15.x. The library now requires React versions ^16.14.0, ^17.0.0, or ^18.0.0. Projects using this library must update to these versions to avoid compatibility issues.