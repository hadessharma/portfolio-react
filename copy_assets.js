import fs from 'fs';
import path from 'path';

const srcAsu = '/home/deep/.gemini/antigravity/brain/be442f4e-9933-464f-98e6-ec5102b6a4fc/asu_tutoring_dashboard_1779316608807.png';
const srcAgent = '/home/deep/.gemini/antigravity/brain/be442f4e-9933-464f-98e6-ec5102b6a4fc/portfolio_agent_mockup_1779316776797.png';
const srcSql = '/home/deep/.gemini/antigravity/brain/be442f4e-9933-464f-98e6-ec5102b6a4fc/text2sql_dashboard_1779316803621.png';

const destDirAsu = 'src/assets/project/tutoring_assistant';
const destDirAgent = 'src/assets/project/portfolio_agent';
const destDirSql = 'src/assets/project/text2sql';

function copyFile(src, destDir) {
  if (fs.existsSync(src)) {
    fs.mkdirSync(destDir, { recursive: true });
    fs.copyFileSync(src, path.join(destDir, '1.png'));
    console.log(`Successfully copied ${src} to ${destDir}/1.png`);
  } else {
    console.log(`Source file does not exist: ${src}`);
  }
}

copyFile(srcAsu, destDirAsu);
copyFile(srcAgent, destDirAgent);
copyFile(srcSql, destDirSql);
