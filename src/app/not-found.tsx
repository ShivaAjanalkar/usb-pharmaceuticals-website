import Link from "next/link";
import PageHead from "@/components/PageHead";

export default function NotFound() {
  return (
    <>
      <PageHead
        kicker="404"
        title="That page is not here."
        sub="The link may be out of date, or the page may not have been published yet."
      />
      <section className="section">
        <div className="shell section__body">
          <Link href="/" className="btn btn--primary">
            Back to the home page <span className="btn__arrow">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
