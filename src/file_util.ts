
import * as fs from 'fs';
import * as vscode from 'vscode';


export class FileUtil {
          /// create folder at path if not exists
          public static createFolderIfNotExists(path: string): void {
                    if (!fs.existsSync(path)) {
                              fs.mkdirSync(path, { recursive: true });
                    }
          }

          /// create file at path if not exists
          public static createFileIfNotExists(path: string, text: string): void {
                    if (!fs.existsSync(path)) {
                              fs.writeFileSync(path, text);
                    }
          }


          /// get current file folder path
          public static getCurrentFileFolderPath(): string | undefined {
                    const filePath = vscode.window.activeTextEditor?.document.uri;
                    const fileFolderUri = filePath?.fsPath.split('/').slice(0, -1).join('/');
                    return fileFolderUri;
          }

          /// get current file path
          public static getCurrentFilePath(): string {
                    return __filename;
          }


} 