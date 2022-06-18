
import * as vscode from 'vscode';
import { ClassUtil } from './class_util';
import { FileUtil } from './file_util';


export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('widget-file.extract', async () => {
		const editor = vscode.window.activeTextEditor;
		const selectedText = editor?.document.getText(editor.selection).trim();
		const folderPath = FileUtil.getCurrentFileFolderPath();

		if (!folderPath) {
			vscode.window.showErrorMessage('Please open a file first.');
			return;
		}

		if (!selectedText) {
			vscode.window.showErrorMessage('Please select a widget class first.');
			return;
		}

		const newFolderPath = folderPath + "/elements";
		FileUtil.createFolderIfNotExists(newFolderPath);

		const className = ClassUtil.classNameFromCode(selectedText);
		const fileName = ClassUtil.camelCaseToSnakeCase(className);
		const newFilePath = newFolderPath + `/${fileName}.dart`;

		editor?.edit((editBuilder) => {
			editBuilder.delete(editor.selection);
		}
		);

		/// open just created file in editor
		vscode.workspace.openTextDocument(newFilePath).then((doc) => {
			vscode.window.showTextDocument(doc);
		}
		);

		FileUtil.createFileIfNotExists(newFilePath, selectedText);






	});
	context.subscriptions.push(disposable);
}
export function deactivate() { }
