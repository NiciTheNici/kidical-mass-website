import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kidical Mass Schweiz</title>
      </Head>
      <body class="bg-gray-900 m-10">
        <div class="mx-auto max-w-screen-lg">
          <img
            src="https://velorution.ch/thumbs/1000x750r/2022-01/1641631197_2-odsc04170.jpg"
            class="w-1/2 mx-auto h-auto"
            alt="Kidical Mass Logo"
          />
          <p class="my-6 text-center text-white">
            Die Kinder sind unsere Zukunft. Wenn sie heute aufs Velo steigen,
            fahren sie auch morgen damit. Die Zahlen zeigen aber einen Rückgang
            der Velonutzung bei Kindern und Jugendlichen in der Schweiz. Das
            darf nicht sein! Setzen wir ein Zeichen, damit die Strassen wieder
            ein angenehmer und sicherer Ort für die Kinder werden!
          </p>
        </div>
        <div
          id="map"
          class="mx-auto max-w-screen-xl"
        >
          <img class="w-full h-auto" src="/map.png" />
        </div>
      </body>
    </>
  );
}
