import React, { useState } from 'react';
import { Star, MessageSquarePlus, Check, X, ShieldCheck } from 'lucide-react';
import { REVIEWS, Review } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewLocation, setNewReviewLocation] = useState('');
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewComment.trim()) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      name: newReviewName.trim(),
      rating: newReviewRating,
      comment: newReviewComment.trim(),
      date: 'Just now',
      location: newReviewLocation.trim() || 'Perinthalmanna',
      avatarColor: '#FFD21F'
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmittedFeedback(true);
    setTimeout(() => {
      setSubmittedFeedback(false);
      setIsModalOpen(false);
      setNewReviewName('');
      setNewReviewComment('');
      setNewReviewLocation('');
      setNewReviewRating(5);
    }, 1500);
  };

  return (
    <section id="reviews" className="py-24 bg-[#0E0E0E] relative border-t border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14">
          <div className="text-center md:text-left">
            <span className="text-xs font-bold text-[#FFD21F] uppercase tracking-widest block mb-2 font-mono">
              Guest Feedback & Hospitality
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              WHAT OUR <span className="text-[#FFD21F]">CUSTOMERS SAY</span>
            </h2>
            <p className="text-sm text-zinc-400 mt-2">
              Genuine experiences from food lovers enjoying our shawaya and grills.
            </p>
          </div>

          {/* Rating Summary + Write Review Button */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 bg-[#161616] border border-[#C0C0C0]/20 px-4 py-2.5 rounded-xl">
              <div className="flex items-center text-[#FFD21F]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFD21F]" />
                ))}
              </div>
              <span className="font-mono text-sm font-bold text-white tabular-nums">4.9 / 5.0</span>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-transparent hover:bg-[#FFD21F] text-[#FFD21F] hover:text-black border border-[#FFD21F] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all flex items-center gap-2"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>WRITE A REVIEW</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsList.map((review) => (
            <div
              key={review.id}
              className="bg-[#141414] border border-[#C0C0C0]/15 hover:border-zinc-700 p-6 rounded-2xl flex flex-col justify-between shadow-lg transition-all duration-200"
            >
              <div>
                {/* Star rating + verification */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#FFD21F]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'fill-[#FFD21F] text-[#FFD21F]' : 'text-zinc-700'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-500 font-mono">{review.date}</span>
                </div>

                {/* Comment quote */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic mb-6">
                  “{review.comment}”
                </p>
              </div>

              {/* Author footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-black text-xs font-mono shrink-0 shadow-md"
                  style={{ backgroundColor: review.avatarColor || '#FFD21F' }}
                >
                  {review.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-white font-display">{review.name}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FFD21F]" />
                  </div>
                  {review.location && (
                    <span className="text-[11px] text-zinc-500 block">{review.location}</span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Write a Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#141414] border border-[#C0C0C0]/20 rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-display font-bold text-white mb-2">Write a Review</h3>
            <p className="text-xs text-zinc-400 mb-6">
              Share your dining or delivery experience at Yamama Shawaya.
            </p>

            {submittedFeedback ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Thank you for your review!</h4>
                <p className="text-xs text-zinc-400">Your feedback has been published.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                {/* Rating selection */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase mb-2">
                    Your Rating:
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReviewRating(star)}
                        className="p-1 text-2xl transition-transform hover:scale-125 focus:outline-none"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newReviewRating
                              ? 'fill-[#FFD21F] text-[#FFD21F]'
                              : 'text-zinc-600'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-mono text-[#FFD21F] ml-2">
                      {newReviewRating} / 5 Stars
                    </span>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    required
                    value={newReviewName}
                    onChange={(e) => setNewReviewName(e.target.value)}
                    placeholder="e.g. Tariq Al-Mansoor"
                    className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFD21F]"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                    City / Neighborhood (Optional):
                  </label>
                  <input
                    type="text"
                    value={newReviewLocation}
                    onChange={(e) => setNewReviewLocation(e.target.value)}
                    placeholder="e.g. Tirurkad, Perinthalmanna"
                    className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFD21F]"
                  />
                </div>

                {/* Comment */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                    Review Details:
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={newReviewComment}
                    onChange={(e) => setNewReviewComment(e.target.value)}
                    placeholder="How was the shawaya, the flavour, and service?"
                    className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFD21F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E21B23] hover:bg-[#c9141c] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all shadow-lg"
                >
                  Submit Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
