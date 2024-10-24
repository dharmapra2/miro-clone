import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <h1 className="char">
        <span style={{ "--char-index": 0 } as React.CSSProperties}>M</span>
        <span style={{ "--char-index": 1 } as React.CSSProperties}>i</span>
        <span style={{ "--char-index": 2 } as React.CSSProperties}>r</span>
        <span style={{ "--char-index": 3 } as React.CSSProperties}>o</span>
        <span style={{ "--char-index": 4 } as React.CSSProperties}>-</span>
        <span style={{ "--char-index": 5 } as React.CSSProperties}>C</span>
        <span style={{ "--char-index": 6 } as React.CSSProperties}>l</span>
        <span style={{ "--char-index": 7 } as React.CSSProperties}>o</span>
        <span style={{ "--char-index": 8 } as React.CSSProperties}>n</span>
        <span style={{ "--char-index": 9 } as React.CSSProperties}>e</span>
      </h1>
      <section>heea f;asdfjkas jdkf sldf alks;d fjkalsd jf;asdfasdflo</section>
      <section>
        <Button className="rounded-full my-5 bg-red-400 hover:bg-slate-400">
          Get from Microsoft Store
        </Button>
      </section>
    </main>
  );
}
