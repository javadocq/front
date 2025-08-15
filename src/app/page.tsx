"use client";

import AboutMe from "./components/AboutMe";
import Archiving from "./components/Archiving";
import Hook from "./components/Hook";
import MainProjectView from "./components/MainProjectView";
import Section from "./components/Section";

export default function Home() {
  return (
    <div className="flex flex-col items-center scroll-smooth">
      <Section>
        <Hook />
      </Section>
      <Section>
        <AboutMe />
      </Section>
      <Section>
        <MainProjectView />
      </Section>
      <Section>
        <Archiving />
      </Section>
    </div>
  );
}
