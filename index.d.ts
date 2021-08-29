declare module 'say' {
  const say: SayJS.Say;

  namespace SayJS {
    class Say {
      public export(text: string, voice?: string, speed?: number, filePath?: string): Promise<void>;
      public speak(text: string, voice?: string, speed?: number): Promise<void>;
      public stop(): Promise<void>;
      public getInstalledVoices(): Promise<string[]>;
    }
  }

  export = say;
}
