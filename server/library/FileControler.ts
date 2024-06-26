import fs from "fs";
import path from "path";

const folderpath = path.join(process.cwd(), "public");

export default class FileController {
  checker = /^[a-zA-Z0-9\.\s\-_]+$/;

  async upload(file: any): Promise<number> {
    let filename = file.originalFilename;
    if (this.checker.test(filename)) {
      filename = filename.replace(/[\s-]+/, " ");
      filename = filename.replace(/[\s_]/, "-");

      let dirFiles = fs.readdirSync(folderpath);
      if (dirFiles.includes(filename)) {
        filename = file.newFilename + "." + filename.split(".").pop();
      }
    } else {
      filename = file.newFilename + "." + filename.split(".").pop();
    }

    // let filepath = "files/" + filename;
    let filepath = filename;
    fs.renameSync(file.filepath, path.join(folderpath, filepath));
    // let image = new Images();
    // let result = await image.insert({ path: filepath });
    // let result = {id: 1};
    return filepath;
  }

  async groupUpload(files: any[]): Promise<number[]> {
    let result: number[] = [];
    for (const value of files) {
      // let id = await this.upload(value);
      // result.push(id);
      let filepath = await this.upload(value);
      result.push(filepath);
    }
    return result;
  }
}
