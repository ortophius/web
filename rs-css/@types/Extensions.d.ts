declare module '*.pug' {
  const content: string;
  export default content;
}

declare module '*.scss' {
  const content: string;
  export default content;
}

interface LevelDescription {
  title: string;
  subtitle: string;
  selector: string;
  info: string;
  examples: string[];
}

interface Level {
  goal: string;
  dom: string;
  selector: string;
  description: LevelDescription;
}
