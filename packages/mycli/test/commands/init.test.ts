import { test } from '@oclif/test';

describe('init command works', () => {
  test
    .stdout()
    .command(['init'])
    .it('runs init', ctx => {
      expect(ctx.stdout.trim()).toBe('hello world from ./src/commands/init.ts');
    });

  test
    .stdout()
    .command(['init', '--name', 'jeff'])
    .it('runs init --name jeff', ctx => {
      expect(ctx.stdout.trim()).toBe('hello jeff from ./src/commands/init.ts');
    });
});
