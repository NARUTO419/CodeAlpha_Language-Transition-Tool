// Send text to backend for translation
async function translateText() {
  const text = document.getElementById("inputText").value;
  const sourceLang = document.getElementById("sourceLang").value;
  const targetLang = document.getElementById("targetLang").value;

  if (!text) {
    alert("Please enter some text");
    return;
  }

  document.getElementById("outputText").innerText = "Translating...";

  try {
    const response = await fetch("/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        sourceLang,
        targetLang,
      }),
    });

    const data = await response.json();

    document.getElementById("outputText").innerText =
      data.translatedText || "Translation failed";
  } catch (error) {
    document.getElementById("outputText").innerText = "Translation failed";
  }
}

// Copy translated text to clipboard
function copyText() {
  const text = document.getElementById("outputText").innerText;

  if (!text || text === "Translation failed") {
    alert("Nothing to copy");
    return;
  }

  navigator.clipboard.writeText(text).then(() => {
    document.getElementById("copyStatus").innerText = "Copied to clipboard!";
    setTimeout(() => {
      document.getElementById("copyStatus").innerText = "";
    }, 2000);
  });
}

// Speak input text
function speakInput() {
  const text = document.getElementById("inputText").value;
  if (!text) return;

  const langCode = document.getElementById("sourceLang").value;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = getSpeechLang(langCode);

  window.speechSynthesis.speak(utterance);
}

// Speak translated output text
function speakOutput() {
  const text = document.getElementById("outputText").innerText;
  if (!text || text === "Translation failed") return;

  const langCode = document.getElementById("targetLang").value;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = getSpeechLang(langCode);

  window.speechSynthesis.speak(utterance);
}

// Map language codes to speech synthesis locales
function getSpeechLang(code) {
  const map = {
    en: "en-US",
    hi: "hi-IN",
    bn: "bn-IN",
    ur: "ur-PK",
    ta: "ta-IN",
    te: "te-IN",
    mr: "mr-IN",
    gu: "gu-IN",
    pa: "pa-IN",
    fr: "fr-FR",
    de: "de-DE",
    es: "es-ES",
    it: "it-IT",
    pt: "pt-PT",
    ru: "ru-RU",
    ja: "ja-JP",
    zh: "zh-CN",
    ar: "ar-SA",
    ko: "ko-KR",
    tr: "tr-TR",
    vi: "vi-VN",
    th: "th-TH",
    id: "id-ID",
    nl: "nl-NL",
    pl: "pl-PL",
    sv: "sv-SE",
  };

  // Fallback to English if auto-detect or unknown
  return map[code] || "en-US";
}
// Swap source and target languages + text
function swapLanguages() {
  const sourceSelect = document.getElementById("sourceLang");
  const targetSelect = document.getElementById("targetLang");
  const inputText = document.getElementById("inputText");
  const outputText = document.getElementById("outputText");

  // Do not swap if source is auto
  if (sourceSelect.value === "auto") {
    alert("Cannot swap when source language is Auto Detect");
    return;
  }

  // Swap language values
  const tempLang = sourceSelect.value;
  sourceSelect.value = targetSelect.value;
  targetSelect.value = tempLang;

  // Swap text values
  const tempText = inputText.value;
  inputText.value = outputText.innerText;
  outputText.innerText = tempText;
}
