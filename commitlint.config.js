export default {
  parserPreset: {
    parserOpts: {
      headerPattern: /^([^\w]*)?(\w+)(?:\(([\w-]+)\))?:\s*(.+)$/,
      headerCorrespondence: ['emoji', 'type', 'scope', 'subject'],
    },
  },
  rules: {
    'type-enum': [2, 'always', [
      'feat', 'fix', 'refactor', 'style', 'perf', 'chore',
      'release', 'del', 'test', 'build', 'revert', 'merge',
    ]],
    'scope-enum': [2, 'always', [
      'fe', 'be', 'cfg', 'deps', 'ci', 'docs',
    ]],
    'scope-empty': [0],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-min-length': [2, 'always', 3],
    'subject-max-length': [2, 'always', 70],
    'header-max-length': [2, 'always', 100],
  },
}