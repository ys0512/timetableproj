import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!_!</h1>
      <Counter />
      
      test
      <a href="comgooglemaps://">Google Mapsのアプリを開く</a>
      <a href="twitter://user?screen_name=digital_jpn">Twitterアカウント</a>
      <a href="twitter://">Twitterだけ</a>
      
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
