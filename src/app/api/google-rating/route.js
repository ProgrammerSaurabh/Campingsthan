// app/api/google-rating/route.js
export async function GET() {
  const apiKey = process.env.GOOGLE_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.NEXT_PUBLIC_GOOGLE_MAP_PLACE_ID}&fields=name,rating,user_ratings_total,reviews&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.status !== 'OK') {
    return Response.json({ error: data.status }, { status: 500 });
  }
  return Response.json({
    name: data.result.name,
    rating: data.result.rating,
    userRatingsTotal: data.result.user_ratings_total,
    reviews: data.result.reviews,
  });
}
