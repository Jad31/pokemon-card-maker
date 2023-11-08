# Contributing to Pokemon Card Maker

Thank you for considering contributing to the Pokemon Card Maker! This project uses Angular with the Nx monorepo manager and Yarn as a package manager.

## Found an Issue?

If you find a bug in the source code or wish for a feature request, you can help us by submitting an issue to our GitHub Repository. Even better, you can submit a Pull Request for it.

## Project Structure

The Pokemon Card Maker is managed as a monorepo using Nx with an Angular preset.

Here's a quick overview of the project structure:

- `src` - Contains the root of the application and the main entry point.
- `libs` - Contains the libraries code used by the application.
- `e2e` - Contains the cypress e2e tests for the application.
- `tests` - Contains the Playwright tests for the application.

## Building the Project

After cloning the project, you will need to install the dependencies using Yarn.

```bash
yarn install
```

To build all the projects, run the following command:

```bash
yarn build
```

To build a specific project, run the following command:

```bash
yarn build pokemon-card-maker
```

## Running Unit Tests

To make sure your changes do not break any unit tests, run the following:

```bash
nx affected --target=test
```

For example, if you need to only run the tests for the form library, run:

```bash
nx test form
```

## Running E2E Tests

To make sure your changes do not break any e2e tests, run the following:

```bash
nx affected --target=e2e
```

For example, if you need to only run the tests for the form library, run:

```bash
nx e2e form
```

## Submission Guidelines

### Submitting an Issue

Before creating an issue, please search the issue tracker to avoid duplication. If an issue already exists, it may contain discussions that provide workarounds or announce planned enhancements.

To effectively address your issue, we appreciate the submission of the following information:

- A clear description of the issue, including any error messages if applicable.
- Steps to reproduce the issue.
- Your `yarn.lock` file to identify the exact versions of dependencies in use.

Creating a minimal reproduction scenario allows us to validate and address issues more efficiently. If you're able to provide a repository or a live example that demonstrates the issue, that would be ideal.

To submit an issue, utilize the designated issue template provided within our GitHub repository.

### Submitting a Pull Request (PR)

When you're ready to submit a PR, please keep the following in mind:

1. Confirm that all unit tests pass with `yarn test`.
2. If you've added or modified functionality, update or add new tests as appropriate.
3. Ensure that E2E tests are passing with `yarn e2e`.
4. Use `yarn format` to format your code according to the project's coding standards.
5. Update the documentation to reflect any changes or additions you've made.
6. Craft your commit messages according to the Conventional Commits format.

### Commit Message Guidelines

Your commit messages play a significant role in our versioning process and documentation. Please format your commit messages as follows:

```bash
type(scope): subject

body

Closes #issue-number
```

| Commit Type | Description                                                 |
| ----------- | ----------------------------------------------------------- |
| feat        | A new feature                                               |
| fix         | A bug fix                                                   |
| docs        | Documentation changes                                       |
| style       | Code style changes (formatting, semi-colons, etc.)          |
| refactor    | Code changes that neither fix a bug nor add a feature       |
| perf        | Performance improvements                                    |
| test        | Adding or updating tests                                    |
| build       | Changes affecting the build system or external dependencies |
| ci          | Changes to our CI configuration files and scripts           |

#### Subject and Body

The subject line should offer a succinct description of the changes. The body is optional but should be included if your changes are substantial.

```bash
feat(download-card): add new pokemon type icons

Included a set of icons representing the latest pokemon types within the card creation form. Enhanced icon accessibility by providing descriptive alt text for screen readers.

Closes #456
```

We encourage you to write clear and detailed commit messages that help the project maintainers and future contributors understand the purpose of your changes.
