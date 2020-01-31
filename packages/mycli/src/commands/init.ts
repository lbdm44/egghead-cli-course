import { Command, flags } from '@oclif/command';
const debug = require('debug')('mycli:init');

class Mycli extends Command {
  static description = 'describe the command here';

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({
      char: 'n',
      description: 'name to print',
      default: 'world',
    }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  };

  static args = [{ name: 'file' }];

  async run() {
    const { args, flags } = this.parse(Mycli);
    const name = flags.name;

    debug('Parsing args', args);
    debug('Parsing flags', flags);

    this.log(`hello ${name} from ./src/commands/init.ts`);

    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}

export = Mycli;
