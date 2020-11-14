import { commands } from './constValues';
import { browser } from 'webextension-polyfill-ts'

const execute = async () => {
    const value = await browser.storage.local.get('date')
    console.log(value.date || '日時が記録されていません')

    await browser.storage.local.set({ date: new Date().toString() })
    console.log('現在の日時を記録しました')
}

execute()

// ----------- メッセージ受信部分

// これってbrowserでいいの？
browser.runtime.onMessage.addListener(
    (message: string, sender: any) => {
        console.log(`message: ${message}`)
        if (message === commands.COPY_TITLE) {
            (async () => {
                const value = await browser.storage.local.get('date');
                console.log(value.date || '日時が記録されていません');

                const sampleTextPromise = await browser.storage.local.get("date")
                const sampleText = sampleTextPromise.date as string
                console.log(`sample text: ${sampleText}`)
                copyText(sampleText)
            })();
        }
    }
)

const copyText = (text: string) => {
    const inputElement = document.createElement("input");
    inputElement.value = text;
    document.body.appendChild(inputElement);
    inputElement.focus();
    inputElement.select();
    const r = document.execCommand("copy");
    document.body.removeChild(inputElement);
    console.log(`return value: ${r}`)
}
