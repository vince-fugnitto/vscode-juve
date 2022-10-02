import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    const disposables: vscode.Disposable[] = [];

    disposables.push(
        vscode.commands.registerCommand('vscode-juve.fixtures-results', () => {
            vscode.env.openExternal(vscode.Uri.parse('https://www.google.com/search?q=juventus+standings&oq=juventus+standings&aqs=chrome.0.0i20i263i512j0i512j0i20i263i512j0i512j0i10i512j0i22i30l2j69i60.3738j1j4&sourceid=chrome&ie=UTF-8#sie=t;/m/045xx;2;/m/03zv9;mt;fp;1;;;'));
        })
    );

    disposables.push(
        vscode.commands.registerCommand('vscode-juve.serie-a-standings', () => {
            vscode.env.openExternal(vscode.Uri.parse('https://www.google.com/search?q=juventus+standings&oq=juventus+standings&aqs=chrome.0.0i20i263i512j0i512j0i20i263i512j0i512j0i10i512j0i22i30l2j69i60.3738j1j4&sourceid=chrome&ie=UTF-8#sie=t;/m/045xx;2;/m/03zv9;st;fp;1;;;'));
        })
    );

    disposables.push(
        vscode.commands.registerCommand('vscode-juve.news', () => {
            vscode.env.openExternal(vscode.Uri.parse('https://www.google.com/search?q=juventus+matches&oq=juventus+matches&aqs=chrome..69i57j0i512l5j69i60j69i61.2874j1j7&sourceid=chrome&ie=UTF-8#sie=t;/m/045xx;2;/m/03zv9;nw;fp;1;;;'));
        })
    );


    context.subscriptions.push(...disposables);
}

export function deactivate() { }
