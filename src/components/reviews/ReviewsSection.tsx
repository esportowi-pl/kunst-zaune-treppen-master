
import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { fromTable } from '@/integrations/supabase/helpers';

interface Review {
  id: string;
  client_name: string;
  client_location: string;
  project_type: string;
  rating: number;
  review_text: string;
  google_review_url?: string;
  is_featured: boolean;
  created_at: string;
}

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [averageRating, setAverageRating] = useState(4.9);
  const [totalReviews, setTotalReviews] = useState(523);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('is_featured', true)
        .order('created_at', { ascending: false })
        .limit(6);

      if (error) {
        console.error('Error fetching reviews:', error);
        // Fallback to sample data if no reviews in database
        setReviews(getSampleReviews());
        return;
      }

      if (data && data.length > 0) {
        setReviews(data);
      } else {
        // Show sample reviews if database is empty
        setReviews(getSampleReviews());
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setReviews(getSampleReviews());
    }
  };

  const getSampleReviews = (): Review[] => [
    {
      id: 'sample-1',
      client_name: 'Rodzina Schmidt',
      client_location: 'Monachium',
      project_type: 'Ogrodzenie Metalowe Premium',
      rating: 5,
      review_text: 'Absolutnie doskonałe! Jakość przewyższa wszystkie oczekiwania. Nasze ogrodzenie metalowe po 3 latach wciąż wygląda jak nowe.',
      is_featured: true,
      created_at: '2024-01-15'
    },
    {
      id: 'sample-2',
      client_name: 'Thomas Weber',
      client_location: 'Berlin',
      project_type: 'Kręcone schody dębowe',
      rating: 5,
      review_text: 'Od konsultacji do montażu wszystko top! Schody drewniane to absolutny hit i zostały dopasowane z precyzją do milimetra.',
      is_featured: true,
      created_at: '2024-02-10'
    },
    {
      id: 'sample-3',
      client_name: 'Rodzina Müller',
      client_location: 'Hamburg',
      project_type: 'Kute ogrodzenie z bramą',
      rating: 5,
      review_text: 'Terminowo, profesjonalnie i w uczciwych cenach. Po 18 miesiącach wciąż jesteśmy zachwyceni naszym ogrodzeniem.',
      is_featured: true,
      created_at: '2024-03-05'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">⭐ Co mówią nasi klienci</h2>
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="flex">{renderStars(5)}</div>
            <span className="text-2xl font-bold">{averageRating}/5</span>
            <span className="text-gray-600">({totalReviews}+ opinii)</span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <strong>97% klientów poleca nas znajomym</strong> • Sprawdź autentyczne opinie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex">{renderStars(review.rating)}</div>
                <Quote className="w-6 h-6 text-green-500" />
              </div>
              
              <p className="text-gray-700 mb-4 italic">"{review.review_text}"</p>
              
              <div className="border-t pt-4">
                <p className="font-bold text-lg">{review.client_name}</p>
                <p className="text-gray-600">{review.client_location}</p>
                <p className="text-sm text-green-600 font-medium mt-1">
                  {review.project_type}
                </p>
                {review.google_review_url && (
                  <a
                    href={review.google_review_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-xs hover:underline mt-2 inline-block"
                  >
                    Zobacz w Google Reviews
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-green-700">
              🎯 Dołącz do zadowolonych klientów!
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Każda opinia jest dla nas ważna. Po zakończeniu projektu poprosimy Cię o opinię.
            </p>
            <a
              href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold"
            >
              ⭐ Oceń nas w Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
