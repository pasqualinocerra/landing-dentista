
type Review = {
  name: string;
  text: string;
};

type ReviewsProps = {
  reviews: Review[];
};

function Reviews({ reviews }: ReviewsProps) {
  return (
    <section id="recensioni" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-cyan-600">
            Recensioni
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Le persone prima di tutto
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-7"
            >
              <div className="text-lg tracking-widest text-amber-400">
                ★★★★★
              </div>

              <p className="mt-5 leading-7 text-slate-600">
                "{review.text}"
              </p>

              <div className="mt-6 font-bold text-slate-900">
                {review.name}
              </div>

              <div className="text-sm text-slate-400">Paziente</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
