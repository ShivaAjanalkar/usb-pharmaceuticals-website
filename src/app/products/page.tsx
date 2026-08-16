import type { Metadata } from "next";
import Catalogue from "@/components/Catalogue";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Composition, strength, dosage form, pack size and therapeutic category. Nothing that Indian law reserves for healthcare professionals.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHead
        kicker="02 · Products"
        title="Product catalogue"
        sub="Composition, strength, dosage form, pack size and therapeutic category. Nothing that Indian law reserves for healthcare professionals."
      />

      <section className="section section--mist">
        <div className="shell" style={{ paddingBlock: "clamp(24px, 3vw, 40px)" }}>
          <p className="notice">
            <span className="notice__label">REGULATORY NOTICE · </span>
            This catalogue lists composition, strength, dosage form, pack size and
            therapeutic category only. Indications, efficacy claims, comparisons
            and pricing are not published. Prescription products under Schedules
            H, H1 and X are not advertised to the public, per the Drugs and Magic
            Remedies (Objectionable Advertisements) Act, 1954. Schedule
            classifications shown are pending final regulatory confirmation.
          </p>
        </div>
      </section>

      <Catalogue />
    </>
  );
}
