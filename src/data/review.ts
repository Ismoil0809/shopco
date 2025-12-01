//Make: reviewData, generateFakeReviews

import { faker } from "@faker-js/faker"

// Support both faker v8+ and v7- APIs via safe helpers




import { type Review } from "./type"

const reviewData: Review[] = [
  {
    id: "1",
    username: "john_doe",
    rating: 5,
    comment: "Great product! Highly recommend.",
    date: "2023-08-15",
  },
  {
    id: "2",
    username: "jane_smith",
    rating: 4,
    comment: "Good quality, but a bit pricey.",
    date: "2023-08-10",
  },
  {
    id: "3",
    username: "alice_wonder",
    rating: 3,
    comment: "Average experience, nothing special.",
    date: "2023-07-25",
  },
]

function generateFakeReviews(count: number): Review[] {
  const reviews: Review[] = []
  for (let i = 0; i < count; i++) {
    reviews.push({
      id: faker.string.uuid(),
      username: faker.internet.username(),
      rating: faker.number.int({ min: 1, max: 5 }),
      comment: faker.lorem.sentences(faker.number.int({ min: 1, max: 3 })),
      date: faker.date.past({ years: 1 }).toISOString().split("T")[0], // past year
    })
  }
  return reviews
}

export { reviewData, generateFakeReviews };