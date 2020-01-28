const { execSync } = require('child_process');

const runArtilleryConfig = (fileName) => {
    // This command run artillery for chosen yaml file and generate output json file
    execSync(`artillery run --config config/config.yaml --overrides "$(cat phases/phases.json)" scenarios/${fileName}`, { stdio: 'inherit' })
}
const fileName = process.argv[2];

runArtilleryConfig(fileName);
