// =========================================================
//  HOW TO ADD A NEW RECIPE
//  Copy one of the objects below and paste it into the
//  RECIPES array just above the closing ];
//
//  id       — unique string, e.g. "r20" (never reuse one)
//  title    — recipe name
//  cal      — calories per serving (number)
//  protein  — "chicken" | "beef" | "fish" | "vegetarian" | "snack"
//  fiber    — grams fiber (number)
//  cost     — "$" or "$$" or "$$$"
//  isLettuce— true if it's a lettuce/no-rice bowl (or omit)
//  prep     — true if meal-prep friendly
//  isNew    — true to show a "New" badge (remove after a while)
//  tags     — short ingredient/flavor keywords (array of strings)
//  desc     — one or two sentence description
//  ing      — ingredients list (array of strings)
//  steps    — cooking instructions (single string)
//  tip      — meal prep tip (single string)
// =========================================================

const RECIPES = [

  // -------------------------------------------------------
  //  VEGETARIAN MEALS
  // -------------------------------------------------------
  {
    id: "r1",
    title: "Black bean & corn taco bowls",
    cal: 420, protein: "vegetarian", proteinG: 28, fiber: 18, cost: "$",
    prep: true,
    tags: ["black beans", "corn", "red onion", "cilantro", "lime"],
    desc: "Seasoned black beans over cauliflower rice or greens with corn, pickled red onion, cilantro, and a cumin-lime dressing.",
    ing: [
      "2 cans black beans, drained and rinsed",
      "1 cup frozen corn, thawed",
      "1 red onion, diced",
      "1 cup cilantro, roughly chopped",
      "1 tsp each: cumin, chili powder, garlic powder",
      "Juice of 2 limes",
      "Romaine or mixed greens (or cauliflower rice)",
      "Optional: Greek yogurt as sour cream sub"
    ],
    steps: "Sauté onion until soft. Add beans, corn, and spices with a splash of water. Simmer 10 min. Serve over greens with cilantro and lime.",
    tip: "Make a double batch of beans — portion into containers. Add fresh greens when serving."
  },

  {
    id: "r3",
    title: "Three-bean veggie chili",
    cal: 360, protein: "vegetarian", proteinG: 20, fiber: 22, cost: "$",
    prep: true,
    tags: ["black beans", "kidney beans", "northern beans", "corn", "bell pepper"],
    desc: "Fully plant-based chili packed with three kinds of beans, corn, and bell peppers. Enormous bowls for very few calories.",
    ing: [
      "1 can each: black beans, kidney beans, northern beans",
      "1 can corn",
      "2 bell peppers, diced",
      "1 red onion, diced",
      "2 tbsp chili powder",
      "1 tsp each: smoked paprika, cumin, garlic powder",
      "2 cups vegetable broth",
      "Cilantro and lime to finish"
    ],
    steps: "Sauté peppers and onion. Add beans, corn, spices, and broth. Simmer 25 min until thick. Top with cilantro.",
    tip: "Improves overnight. Make Sunday, eat all week."
  },

  // -------------------------------------------------------
  //  CHICKEN MEALS
  // -------------------------------------------------------
  {
    id: "r2",
    title: "White bean & chicken chili",
    cal: 380, protein: "chicken", proteinG: 42, fiber: 14, cost: "$",
    prep: true,
    tags: ["white beans", "chicken", "green chiles", "corn", "red onion"],
    desc: "Hearty white bean chili with shredded chicken breast, corn, and green chiles. One pot, massive yield, freezes perfectly.",
    ing: [
      "2 cans white (cannellini) beans",
      "1 lb chicken breast",
      "1 can diced green chiles",
      "1 cup frozen corn",
      "1 red onion, diced",
      "4 cups low-sodium chicken broth",
      "1 tsp each: cumin, oregano, garlic powder",
      "Cilantro and lime to finish"
    ],
    steps: "Simmer chicken in broth until cooked through, then shred. Add beans, corn, chiles, onion, and spices. Simmer 20 min. Finish with cilantro and lime.",
    tip: "Freezes in portions up to 3 months. A batch yields 6–8 servings."
  },

  {
    id: "r4",
    title: "Southwest chicken thigh burrito bowl",
    cal: 620, protein: "chicken", proteinG: 50, fiber: 18, cost: "$",
    prep: true,
    tags: ["chicken thighs", "black beans", "corn", "cilantro-lime rice", "red onion", "Greek yogurt"],
    desc: "Juicy spiced chicken thighs over cilantro-lime rice with black beans, corn salsa, and Greek yogurt instead of sour cream.",
    ing: [
      "1.5 lb boneless chicken thighs",
      "1 can black beans",
      "1 cup corn",
      "1 red onion, diced",
      "2 cups brown rice + juice of 1 lime + ¼ cup cilantro",
      "1 tsp each: cumin, chili powder, garlic powder, smoked paprika",
      "Greek yogurt (in place of sour cream)",
      "Lime wedges"
    ],
    steps: "Season and sear or grill chicken thighs. Warm beans with cumin and garlic. Make cilantro-lime rice. Assemble bowls with corn, onion, and a dollop of Greek yogurt.",
    tip: "Batch cook chicken and rice Sunday. Corn salsa (corn + red onion + cilantro + lime) lasts 4 days — make a big jar."
  },

  {
    id: "r12",
    title: "Southwest chicken lettuce wrap bowl",
    cal: 420, protein: "chicken", proteinG: 46, fiber: 12, cost: "$",
    prep: true, isLettuce: true,
    tags: ["chicken breast", "black beans", "corn", "red onion", "cilantro", "romaine", "avocado"],
    desc: "Juicy spiced chicken breast over a big bed of romaine with black beans, corn, pickled red onion, avocado, and a cilantro-lime dressing. No rice — all volume, all flavor.",
    ing: [
      "1.5 lb chicken breast",
      "1 can black beans, drained and rinsed",
      "1 cup frozen corn, thawed",
      "1 red onion, thinly sliced",
      "1 large head romaine, chopped",
      "½ cup cilantro, roughly chopped",
      "1 avocado, sliced",
      "Juice of 2 limes",
      "1 tsp each: cumin, chili powder, garlic powder, smoked paprika",
      "1 tbsp olive oil",
      "Salt and pepper",
      "Optional: pickled jalapeño, Greek yogurt"
    ],
    steps: "Season chicken with spices, salt, and pepper. Sear in a skillet over medium-high heat 5–6 min per side until cooked through (165°F internal). Rest 5 min, then slice. Warm beans with a pinch of cumin. Make dressing: lime juice + 1 tsp cumin + 1 tsp olive oil + pinch of salt. Build bowls: romaine base, beans, corn, red onion, chicken, avocado. Drizzle dressing, finish with cilantro.",
    tip: "Prep chicken and beans Sunday. Store separately from greens. Chop romaine fresh — it wilts once dressed."
  },

  {
    id: "r13",
    title: "Chipotle chicken & kale power bowl",
    cal: 450, protein: "chicken", proteinG: 48, fiber: 15, cost: "$",
    prep: true, isLettuce: true,
    tags: ["chicken thighs", "kale", "black beans", "corn", "red onion", "chipotle", "Greek yogurt"],
    desc: "Smoky chipotle-marinated chicken thighs over massaged kale with black beans, roasted corn, and a creamy Greek yogurt-lime drizzle. Kale holds up dressed for 2–3 days — the best lettuce bowl for meal prep.",
    ing: [
      "1.5 lb boneless chicken thighs",
      "2 chipotle peppers in adobo sauce, minced (or 2 tsp chipotle powder)",
      "1 tbsp olive oil",
      "1 tsp each: cumin, garlic powder, smoked paprika",
      "1 large bunch kale, stems removed and chopped",
      "1 can black beans, drained",
      "1 cup corn (frozen or fresh)",
      "½ red onion, diced",
      "½ cup plain Greek yogurt",
      "Juice of 1 lime",
      "1 tsp honey",
      "Salt and pepper"
    ],
    steps: "Marinate chicken thighs in chipotle, olive oil, and spices at least 30 min (overnight is better). Cook in skillet 5–6 min per side or bake at 400°F for 22–25 min. Rest then slice. Massage kale: add a pinch of salt and squeeze of lime and work with your hands for 2 min until softened and bright green. Warm beans. Make yogurt drizzle: Greek yogurt + lime juice + honey + pinch of salt. Build bowls: kale base, beans, corn, onion, chicken. Drizzle yogurt sauce.",
    tip: "Kale stays firm even when dressed — prep full bowls (minus the drizzle) and they last 3 days refrigerated."
  },

  {
    id: "r14",
    title: "Chicken fajita salad bowl",
    cal: 430, protein: "chicken", proteinG: 44, fiber: 13, cost: "$",
    prep: true, isLettuce: true,
    tags: ["chicken breast", "bell peppers", "red onion", "romaine", "black beans", "cumin", "cottage cheese"],
    desc: "All the flavors of sizzling fajitas over crispy romaine. Charred peppers and onions, spiced chicken, black beans, and a whipped cottage cheese dressing that adds protein without the calories of heavy dressing.",
    ing: [
      "1.5 lb chicken breast, sliced thin",
      "3 bell peppers (mixed colors), sliced",
      "1 large red onion, sliced into strips",
      "1 can black beans, drained",
      "1 large head romaine, chopped",
      "1 cup cottage cheese",
      "Juice of 1 lime",
      "1 tsp cumin + 1 garlic clove (blend with cottage cheese for dressing)",
      "1 tsp each: cumin, chili powder, garlic powder, smoked paprika",
      "1 tbsp olive oil",
      "Cilantro and hot sauce optional"
    ],
    steps: "Season chicken slices with all spices. In a very hot cast-iron or skillet, cook chicken in batches until charred at edges — do not crowd the pan. Set aside. In same pan, cook peppers and onion strips on high heat until slightly charred and soft, about 6–8 min. Blend cottage cheese + lime juice + cumin + garlic until smooth for dressing. Build bowls: romaine, beans, fajita veggies, chicken. Drizzle dressing, top with cilantro.",
    tip: "The charred fajita filling keeps 4 days and is great cold. The cottage cheese dressing keeps 5 days in the fridge."
  },

  {
    id: "r15",
    title: "Spicy chicken tostada salad",
    cal: 410, protein: "chicken", proteinG: 43, fiber: 14, cost: "$",
    prep: true, isLettuce: true,
    tags: ["chicken thighs", "kidney beans", "corn", "cabbage", "romaine", "lime", "baked tortilla"],
    desc: "A deconstructed tostada bowl — spiced chicken over shredded cabbage and romaine with kidney beans, corn, and baked corn tortilla strips for crunch. Huge volume, very low calorie density.",
    ing: [
      "1.5 lb boneless chicken thighs",
      "1 can kidney beans, drained",
      "1 cup corn",
      "2 cups shredded green or red cabbage",
      "2 cups romaine, chopped",
      "2 corn tortillas, sliced into strips",
      "½ red onion, thinly sliced",
      "Cilantro",
      "Dressing: 2 tbsp lime juice + 1 tsp cumin + 1 tsp olive oil + 1 minced garlic clove",
      "1 tsp each: chili powder, cumin, garlic powder, smoked paprika"
    ],
    steps: "Season and cook chicken thighs (pan or oven at 400°F for 22 min). Rest and slice or shred. Bake tortilla strips at 400°F until crispy, about 8 min. Warm beans. Whisk dressing. Build bowls: cabbage + romaine base, beans, corn, onion, chicken. Drizzle dressing. Top with tortilla strips and cilantro.",
    tip: "Keep tortilla strips in an open bowl at room temp — stays crispy 2 days. Store all components separately from greens."
  },

  {
    id: "r16",
    title: "Greek-style chicken & white bean salad bowl",
    cal: 440, protein: "chicken", proteinG: 47, fiber: 14, cost: "$",
    prep: true, isLettuce: true,
    tags: ["chicken breast", "white beans", "cucumber", "red onion", "spinach", "lemon", "Greek yogurt", "sundried tomatoes"],
    desc: "A Mediterranean-leaning bowl — chicken breast, cannellini beans, cucumber, red onion, spinach, and a creamy Greek yogurt-lemon dressing with sundried tomatoes.",
    ing: [
      "1.5 lb chicken breast",
      "1 can cannellini (white) beans, drained",
      "1 large cucumber, sliced",
      "½ red onion, thinly sliced",
      "3 cups baby spinach",
      "3 tbsp sundried tomatoes, chopped",
      "½ cup plain Greek yogurt",
      "Juice of 1 lemon",
      "1 tbsp olive oil",
      "1 tsp garlic powder, dried oregano",
      "Salt, pepper, red pepper flakes"
    ],
    steps: "Season chicken with garlic powder, oregano, salt, and pepper. Pan-sear or bake at 400°F until 165°F internal. Rest and slice. Make dressing: whisk yogurt + lemon juice + olive oil + garlic powder + salt. Build bowls: spinach base, white beans, cucumber, red onion, sundried tomatoes, sliced chicken. Drizzle dressing.",
    tip: "This bowl works great cold. Spinach holds better than romaine if pre-dressed — ideal for 3-day meal prep."
  },

  {
    id: "r8",
    title: "Thai peanut chicken bowl",
    cal: 550, protein: "chicken", proteinG: 44, fiber: 9, cost: "$",
    prep: true,
    tags: ["chicken thighs", "peanut butter", "soy sauce", "lime", "rice", "cabbage", "cilantro"],
    desc: "Tender chicken thighs in a creamy peanut-lime sauce over rice with shredded cabbage. Thai takeout at home for a fraction of the cost.",
    ing: [
      "1.5 lb boneless chicken thighs",
      "3 tbsp natural peanut butter",
      "2 tbsp soy sauce",
      "1 tbsp lime juice",
      "1 tsp sesame oil",
      "1 tsp chili flakes",
      "2 cloves garlic, minced",
      "2 cups jasmine rice (dry)",
      "2 cups shredded red cabbage",
      "Cilantro and green onion",
      "Optional: crushed peanuts"
    ],
    steps: "Make sauce: whisk peanut butter, soy sauce, lime juice, sesame oil, garlic, and chili flakes. Bake or pan-cook chicken until 165°F, then slice. Toss cabbage in a little sauce. Serve over rice. Drizzle remaining sauce, top with cilantro.",
    tip: "Sauce and chicken keep 4 days. This bowl also works well cold — great for next-day eating."
  },

  {
    id: "r10",
    title: "Japanese chicken & lentil rice bowl",
    cal: 520, protein: "chicken", proteinG: 45, fiber: 14, cost: "$",
    prep: true,
    tags: ["chicken breast", "lentils", "soy sauce", "mirin", "bok choy", "rice"],
    desc: "Chicken breast with a soy-mirin glaze over a rice-lentil blend with bok choy. Lentils add a huge fiber boost with no noticeable flavor change.",
    ing: [
      "1 lb chicken breast",
      "2 tbsp low-sodium soy sauce",
      "1 tbsp mirin (or rice vinegar + ½ tsp sugar)",
      "1 tsp minced garlic",
      "1 tsp grated ginger",
      "½ cup red lentils (cook directly into rice water — they dissolve in)",
      "1 cup jasmine or short-grain rice",
      "2 heads baby bok choy, halved",
      "Sesame seeds to finish"
    ],
    steps: "Cook rice with red lentils added to the same pot and water — they dissolve and enrich the rice. Sear chicken until cooked through. In last 2 min, add soy sauce and mirin to pan and glaze. Sauté bok choy in a little sesame oil with garlic until tender. Assemble bowls.",
    tip: "Cook a big rice-lentil pot Sunday — lasts 4 days refrigerated."
  },

  {
    id: "r11",
    title: "Spicy Korean chicken & potato bowl",
    cal: 540, protein: "chicken", proteinG: 40, fiber: 12, cost: "$",
    prep: true,
    tags: ["chicken thighs", "potatoes", "gochujang", "soy sauce", "sesame", "green onion"],
    desc: "Braised chicken thighs and potato chunks in a spicy-savory gochujang sauce. Hearty, filling, and deeply flavorful.",
    ing: [
      "1.5 lb boneless chicken thighs",
      "2 medium potatoes, cut into 1-inch cubes",
      "3 tbsp gochujang",
      "2 tbsp low-sodium soy sauce",
      "1 tbsp sesame oil",
      "1 tsp minced garlic",
      "1 tsp grated ginger",
      "½ cup water or low-sodium chicken broth",
      "Green onion to finish"
    ],
    steps: "Sauté chicken and potato in sesame oil over medium-high heat. Add garlic and ginger, cook 1 min. Add gochujang, soy sauce, and water. Stir to combine. Simmer covered 20–25 min until potato is tender and sauce is thick. Finish with green onion.",
    tip: "Tastes even better day 2–3. Portion into containers. Reheat with a splash of water."
  },

  {
    id: "r17",
    title: "Chicken & white bean pasta bowl",
    cal: 570, protein: "chicken", proteinG: 48, fiber: 14, cost: "$",
    prep: true,
    tags: ["chicken breast", "white beans", "pasta", "garlic", "sundried tomatoes", "spinach"],
    desc: "High-protein pasta dish with chicken breast, cannellini beans, wilted spinach, and sundried tomatoes in a light garlic-olive oil sauce.",
    ing: [
      "1 lb chicken breast",
      "1 can cannellini beans, drained",
      "8 oz penne or rotini pasta",
      "3 cups baby spinach",
      "3 tbsp sundried tomatoes, chopped",
      "4 garlic cloves, minced",
      "1 tbsp olive oil",
      "Red pepper flakes, salt, pepper",
      "Optional: 2 tbsp grated Parmesan"
    ],
    steps: "Cook pasta, reserve ½ cup pasta water before draining. Sear chicken, slice. In same pan, sauté garlic in olive oil. Add beans, spinach, sundried tomatoes and cook until spinach wilts. Toss with pasta and chicken, using pasta water to loosen sauce.",
    tip: "Reheat with a splash of pasta water or broth to loosen. Keeps 4 days."
  },

  // -------------------------------------------------------
  //  BEEF MEALS
  // -------------------------------------------------------
  {
    id: "r5",
    title: "Ground beef & sweet potato taco bowl",
    cal: 600, protein: "beef", proteinG: 40, fiber: 15, cost: "$",
    prep: true,
    tags: ["ground beef", "sweet potato", "black beans", "cilantro", "red onion"],
    desc: "Roasted sweet potato cubes and seasoned ground beef over greens with black beans. Sweet potato adds volume and fiber.",
    ing: [
      "1 lb ground beef (90/10)",
      "2 medium sweet potatoes, cubed",
      "1 can black beans",
      "½ red onion, diced",
      "1 tsp each: cumin, chili powder, garlic powder, smoked paprika",
      "Romaine or mixed greens",
      "Cilantro and lime",
      "Greek yogurt or cottage cheese as topping"
    ],
    steps: "Roast sweet potato at 400°F for 20 min. Brown beef with spices. Warm beans. Build bowl over greens.",
    tip: "Roast double the sweet potato — use in other bowls all week."
  },

  {
    id: "r6",
    title: "Lentil & ground beef taco bowl",
    cal: 560, protein: "beef", proteinG: 44, fiber: 20, cost: "$",
    prep: true,
    tags: ["ground beef", "lentils", "taco seasoning", "corn", "red onion", "cilantro"],
    desc: "Ground beef stretched with lentils for double the fiber and protein at lower cost. Lentils are virtually undetectable once seasoned.",
    ing: [
      "½ lb ground beef (90/10)",
      "½ cup dry green lentils",
      "1 can corn",
      "1 red onion, diced",
      "2 tbsp taco seasoning (or cumin + chili powder + garlic + paprika)",
      "Rice or greens to serve",
      "Cilantro and lime",
      "Cottage cheese as a cool topping"
    ],
    steps: "Cook lentils 20 min. Brown beef, add lentils and seasoning with a splash of water. Simmer 5 min. Serve over rice or greens with corn, onion, cilantro.",
    tip: "The beef-lentil mixture freezes well. Make big batches and freeze in portions."
  },

  {
    id: "r7",
    title: "Korean-style beef & rice bowl",
    cal: 580, protein: "beef", proteinG: 42, fiber: 10, cost: "$",
    prep: true,
    tags: ["ground beef", "jasmine rice", "gochujang", "sesame", "egg", "spinach"],
    desc: "Seasoned ground beef over rice with a fried egg, wilted spinach, carrots, and a gochujang-sesame sauce.",
    ing: [
      "1 lb ground beef (90/10)",
      "2 cups jasmine or short-grain rice (dry)",
      "2 tbsp gochujang",
      "1 tbsp soy sauce",
      "1 tbsp sesame oil",
      "2 tsp minced garlic",
      "2 tsp grated ginger",
      "2 cups fresh spinach",
      "1 cup shredded carrots",
      "2 large eggs",
      "Green onion to finish"
    ],
    steps: "Brown beef in a skillet with garlic, ginger, soy sauce, and gochujang until cooked through. Sauté spinach until wilted. Fry eggs to your liking. Cook rice. Assemble bowls: rice, beef, spinach, carrots. Top with fried egg and drizzle sesame oil.",
    tip: "Prep rice and beef in bulk. Reheat with a splash of water. Fry eggs fresh each time."
  },

  {
    id: "r18",
    title: "Ground beef & potato hash bowl",
    cal: 580, protein: "beef", proteinG: 40, fiber: 11, cost: "$",
    prep: true,
    tags: ["ground beef", "potatoes", "red onion", "bell pepper", "smoked paprika"],
    desc: "A skillet-style hash of crispy potatoes, ground beef, peppers, and onions — topped with an egg if you want. Incredibly filling and cheap.",
    ing: [
      "1 lb ground beef (90/10)",
      "3 medium potatoes, diced small",
      "1 red onion, diced",
      "2 bell peppers, diced",
      "1 tsp smoked paprika",
      "1 tsp garlic powder",
      "1 tsp cumin",
      "Salt and pepper",
      "Optional: eggs to top"
    ],
    steps: "Par-cook diced potatoes in microwave for 3 min. Crisp in a skillet with a little oil. Add peppers and onion, cook down until soft. Add ground beef and all seasoning, brown fully. Top with a fried egg if desired.",
    tip: "Reheat in a skillet for crispy results. Par-cook and store potatoes ahead to save time."
  },

  // -------------------------------------------------------
  //  FISH MEALS
  // -------------------------------------------------------
  {
    id: "r9",
    title: "Teriyaki salmon rice bowl",
    cal: 560, protein: "fish", proteinG: 46, fiber: 8, cost: "$$",
    prep: false,
    tags: ["salmon", "teriyaki", "edamame", "rice", "sesame", "cucumber"],
    desc: "Pan-seared salmon glazed with homemade teriyaki over rice with edamame and cucumber. One of the best macro profiles possible.",
    ing: [
      "4 × 6 oz salmon fillets",
      "8 tbsp low-sodium soy sauce",
      "4 tbsp honey or maple syrup",
      "4 tsp sesame oil",
      "4 cloves garlic, minced",
      "2 tsp fresh ginger, grated",
      "4 tsp rice vinegar",
      "2 tsp cornstarch (optional, for thicker glaze)",
      "2 cups jasmine rice (dry)",
      "2 cups shelled edamame (frozen)",
      "2 medium cucumbers, sliced",
      "Sesame seeds and green onion to finish"
    ],
    steps: "Make glaze: whisk soy sauce, honey, sesame oil, garlic, ginger, rice vinegar, and cornstarch dissolved in 1 tbsp cold water. Cook rice. Pat salmon completely dry, season with salt and pepper. Sear in a hot skillet 3–4 min per side. Add glaze in last 90 seconds and spoon over fish. Cook edamame per package. Assemble bowls with rice, edamame, cucumber, glazed salmon. Finish with sesame seeds.",
    tip: "Rice and edamame prep Sunday. Sear salmon fresh each night — only 10 min. Reheat salmon on 50% microwave power for 60 sec."
  },

  // -------------------------------------------------------
  //  SNACKS
  // -------------------------------------------------------
  {
    id: "s1",
    title: "Greek yogurt parfait",
    cal: 280, protein: "snack", proteinG: 28, fiber: 6, cost: "$",
    prep: true,
    tags: ["Greek yogurt", "berries", "granola", "honey"],
    desc: "Full-fat or 2% Greek yogurt layered with fruit and high-fiber granola. 28g protein under 300 calories.",
    ing: [
      "1 cup plain 2% Greek yogurt",
      "½ cup mixed berries (fresh or frozen-thawed)",
      "¼ cup high-fiber granola",
      "1 tsp honey or maple syrup"
    ],
    steps: "Layer yogurt in a bowl or mason jar. Top with berries and granola. Drizzle honey.",
    tip: "Buy plain yogurt and sweeten yourself — flavored yogurt has 2–3× the sugar. Prep 4 jars Sunday for the week."
  },

  {
    id: "s2",
    title: "Cottage cheese & fruit bowl",
    cal: 220, protein: "snack", proteinG: 24, fiber: 4, cost: "$",
    prep: true,
    tags: ["cottage cheese", "pineapple", "peach", "cinnamon"],
    desc: "Cottage cheese with fruit is one of the best protein-per-dollar snacks. Works with pineapple, peaches, or berries.",
    ing: [
      "1 cup 2% cottage cheese",
      "½ cup fruit of choice (pineapple, peach, berries)",
      "Pinch of cinnamon or splash of vanilla extract"
    ],
    steps: "Spoon cottage cheese into a bowl. Top with fruit. Season with cinnamon.",
    tip: "Portion into small containers Sunday for grab-and-go snacks all week."
  },

  {
    id: "s3",
    title: "Roasted chickpeas",
    cal: 200, protein: "snack", proteinG: 10, fiber: 8, cost: "$",
    prep: true,
    tags: ["chickpeas", "smoked paprika", "cumin", "olive oil"],
    desc: "Crispy oven-roasted chickpeas seasoned with smoked paprika and cumin. Crunchy, filling, and very cheap.",
    ing: [
      "1 can (15 oz) chickpeas, drained and rinsed",
      "1 tsp olive oil",
      "1 tsp smoked paprika",
      "½ tsp cumin",
      "½ tsp garlic powder",
      "Salt to taste"
    ],
    steps: "Pat chickpeas very dry with paper towels — this is key for crispiness. Toss with oil and spices. Roast at 400°F for 25–30 min, shaking pan halfway, until crispy throughout.",
    tip: "Leave in an open bowl at room temp — do not cover or they steam and go soft. Stays crispy 3 days."
  },

  {
    id: "s4",
    title: "Hard-boiled eggs & cottage cheese dip",
    cal: 210, protein: "snack", proteinG: 22, fiber: 2, cost: "$",
    prep: true,
    tags: ["eggs", "cottage cheese", "chives", "everything bagel seasoning"],
    desc: "Hard-boiled eggs with a savory blended cottage cheese dip. Blend smooth with garlic and seasoning for a high-protein dip.",
    ing: [
      "4 hard-boiled eggs",
      "½ cup cottage cheese",
      "1 clove garlic (or ½ tsp garlic powder)",
      "Everything bagel seasoning or za'atar",
      "Chives optional"
    ],
    steps: "Blend cottage cheese with garlic and a pinch of salt until completely smooth. Peel eggs. Use as a dip, sprinkle with seasoning.",
    tip: "Boil a dozen eggs Sunday. Blended cottage cheese dip keeps 5 days in the fridge."
  },

  {
    id: "s5",
    title: "Black bean & corn mini wrap",
    cal: 250, protein: "snack", proteinG: 12, fiber: 9, cost: "$",
    prep: true,
    tags: ["black beans", "corn", "corn tortilla", "red onion", "cilantro"],
    desc: "A single corn tortilla with seasoned black beans, corn, onion, and cilantro. Snack-sized burrito bowl in wrap form.",
    ing: [
      "1 corn tortilla",
      "¼ cup black beans, seasoned",
      "2 tbsp corn",
      "1 tbsp red onion, diced",
      "Cilantro, squeeze of lime",
      "Pinch of cumin"
    ],
    steps: "Warm tortilla in a dry pan or microwave. Fill with beans, corn, onion, and cilantro. Squeeze lime over. Fold and eat.",
    tip: "Keep the bean-corn mix prepped all week — this assembles in under 2 minutes."
  },

  {
    id: "s6",
    title: "Peanut butter Greek yogurt dip with apple",
    cal: 260, protein: "snack", proteinG: 14, fiber: 5, cost: "$",
    prep: false,
    tags: ["Greek yogurt", "peanut butter", "apple", "cinnamon"],
    desc: "Mix Greek yogurt with peanut butter and cinnamon. Use as a dip for apple slices. Creamy, sweet, and surprisingly filling.",
    ing: [
      "½ cup plain Greek yogurt",
      "1 tbsp natural peanut butter",
      "Pinch of cinnamon",
      "1 medium apple, sliced"
    ],
    steps: "Stir yogurt, peanut butter, and cinnamon together until smooth. Slice apple. Dip.",
    tip: "Freeze the yogurt-PB blend for 20 min for a chilled dessert-style treat."
  },

  {
    id: "r19",
    title: "Beef Lasagna",
    cal: 720, protein: "beef", proteinG: 48, fiber: 6, cost: "$$",
    prep: true,
    tags: ["Italian sausage", "ground beef", "ricotta", "mozzarella", "lasagna noodles", "parmesan"],
    desc: "The classic layered lasagna — Italian sausage and ground beef in a slow-simmered tomato sauce, layered with ricotta, mozzarella, and Parmesan. Makes 12 hearty servings, freezes beautifully.",
    ing: [
      "1 lb sweet Italian sausage",
      "¾ lb lean ground beef",
      "½ cup onion, minced",
      "2 cloves garlic, crushed",
      "1 can (28 oz) crushed tomatoes",
      "2 cans (6.5 oz each) tomato sauce",
      "2 cans (6 oz each) tomato paste",
      "½ cup water",
      "2 tbsp white sugar",
      "4 tbsp fresh parsley, chopped — divided",
      "1½ tsp dried basil",
      "1 tsp Italian seasoning",
      "1 tsp granulated garlic",
      "¼ tsp black pepper",
      "1½ tsp salt — divided",
      "12 lasagna noodles",
      "16 oz ricotta cheese",
      "1 large egg",
      "¾ lb mozzarella cheese, sliced",
      "¾ cup Parmesan cheese, grated"
    ],
    steps: "Brown sausage, ground beef, onion, and garlic in an appropriate-sized pot over medium heat until cooked through. Stir in crushed tomatoes, tomato sauce, tomato paste, and water. Add sugar, 2 tbsp parsley, basil, Italian seasoning, granulated garlic, pepper, and 1 tsp salt. Simmer covered for 1½ hours, stirring occasionally. Boil lasagna noodles 8–10 min, drain and rinse with cold water. Mix ricotta with egg, remaining 2 tbsp parsley, and ½ tsp salt. Preheat oven to 375°F. In a 9x13 baking dish spread 1½ cups meat sauce. Layer 6 noodles, half the ricotta mixture, one third of the mozzarella, 1½ cups meat sauce, and ¼ cup Parmesan. Repeat layers. Top with remaining mozzarella and Parmesan. Cover with foil (spray foil so it does not stick to cheese). Bake covered 25 min, then uncovered 25 min. Rest 15 min before cutting.",
    tip: "Makes 12 servings — ideal for batch cooking. Slice into portions, wrap individually, and freeze up to 3 months. Reheats perfectly from frozen at 350°F for 45 min or microwave covered on 50% power for 3–4 min."
  },

 {
    id: "r20",
    title: "Honey garlic chicken fried rice",
    cal: 580, protein: "chicken", proteinG: 52, fiber: 6, cost: "$",
    prep: true,
    serves: 7,
    tags: ["chicken breast", "fried rice", "honey garlic", "mixed vegetables", "eggs", "soy sauce", "spring onion"],
    desc: "Crispy air-fryer chicken breast coated in a sticky honey garlic sauce served over egg fried rice with mixed vegetables. High protein, big flavor, and meal-preps extremely well.",
    ing: [
      "2.5 lb chicken breast, diced (raw weight)",
      "2½ tbsp reduced-salt soy sauce (for chicken marinade)",
      "2 garlic cloves, minced",
      "½ tsp black pepper",
      "1 tsp onion powder",
      "1 tsp garlic powder",
      "¾ cup potato or corn starch (about ⅓ cup sticks to chicken)",
      "3½ cups frozen mixed vegetables",
      "5 eggs",
      "¼ cup spring onion, white part only",
      "5 cups cooked white rice (day-old works best)",
      "Just under 3 tbsp reduced-salt soy sauce (for rice)",
      "2 tbsp spring onion, green part only",
      "--- Honey garlic sauce ---",
      "5 garlic cloves, minced",
      "¼ cup soy sauce + ¼ cup water",
      "⅓ cup reduced-sugar ketchup",
      "1 tbsp + 2 tsp rice wine vinegar",
      "1 tsp corn starch + ⅓ cup water (slurry)",
      "¼ cup honey or maple syrup"
    ],
    steps: "Dice chicken and mix with soy sauce, minced garlic, black pepper, onion powder, and garlic powder. Coat well with corn starch — a zip-lock bag works great for this. Place on a tray, spray with oil, and air fry at 400°F for 10 min. Flip, spray again, and cook another 8–10 min until internal temp reaches 165°F. Meanwhile heat a large pan or wok on high heat. Add frozen mixed vegetables and eggs, cook while stirring for a few minutes until eggs are cooked through. Add white spring onion parts and day-old rice. Pour in soy sauce and stir-fry everything together until hot throughout. Stir in green spring onion parts and mix well. For the sauce: heat a pan on medium, add minced garlic and cook 30 seconds. Add soy sauce, water, ketchup, and rice vinegar. Stir to combine. Add cornstarch slurry and stir until lightly simmering and thickened. Remove from heat and stir in honey or maple syrup. Toss cooked chicken in the sauce until fully coated. Plate chicken over or beside the fried rice.",
    tip: "Day-old rice is key — fresh rice is too wet and turns mushy. Cook rice the night before and refrigerate uncovered. Portion chicken and rice separately into containers to reheat separately — keeps 5 days. Reheat rice with a splash of water, and if separated reheat chicken in an air fryer 3–4 min to keep it crispy."
  },

{
    id: "r21",
    title: "Bang bang chicken",
    cal: 612, protein: "chicken", proteinG: 43, fiber: 2, cost: "$",
    serves: 3,
    prep: false,
    tags: ["chicken thighs", "bang bang sauce", "sweet chili", "sriracha", "soy sauce", "ginger", "garlic"],
    desc: "Crispy deep-fried chicken thighs marinated in a Japanese-inspired soy-mirin blend, tossed in a creamy, spicy-sweet bang bang sauce. Best served fresh over steamed rice.",
    ing: [
      "4 chicken thighs, cut into bite-sized pieces",
      "2 tbsp soy sauce",
      "1 tbsp sake",
      "1 tbsp mirin",
      "1 tsp sesame oil",
      "4 cloves garlic, minced",
      "2 tsp ginger, minced",
      "½ tsp salt",
      "½ tsp white pepper",
      "1 egg white, beaten",
      "Potato or corn starch to coat",
      "Neutral oil for frying",
      "--- Bang bang sauce ---",
      "½ cup mayo",
      "¼ cup + 1 tbsp Thai sweet chili sauce",
      "3 tbsp sriracha or chili sauce",
      "1 tbsp lemon juice"
    ],
    steps: "Combine chicken with soy sauce, sake, mirin, sesame oil, garlic, ginger, white pepper, salt, and egg white. Mix well, cover, and marinate in the fridge for at least 1 hour or overnight for best results. Make bang bang sauce: whisk together mayo, Thai sweet chili sauce, sriracha, and lemon juice. Set aside. Dredge marinated chicken pieces in potato or corn starch until fully coated. Deep fry in neutral oil at 350°F for 5–6 min until golden brown and crispy — work in batches to avoid crowding. Drain on a wire rack or paper towels. Toss hot chicken in bang bang sauce until fully coated. Serve immediately over steamed rice, garnished with green onion or chives.",
    tip: "Marinate overnight for the deepest flavor. The bang bang sauce keeps 5 days in the fridge — make a double batch and use as a dipping sauce or salad dressing. For a lighter version, air fry the coated chicken at 400°F for 12–14 min instead of deep frying."
  },

{
    id: "r22",
    title: "Crispy tofu & broccoli stir-fry",
    cal: 420, protein: "vegetarian", proteinG: 18, fiber: 8, cost: "$",
    serves: 3,
    prep: true,
    tags: ["tofu", "broccoli", "sesame", "soy sauce", "ginger", "garlic", "scallions", "rice"],
    desc: "Crispy pan-fried tofu and charred broccoli florets glazed in a savory sesame-soy sauce with garlic and ginger. A satisfying vegetarian stir-fry ready in under 30 minutes.",
    ing: [
      "1 block (14 oz) firm tofu, drained",
      "2 medium broccoli crowns, cut into florets",
      "4 garlic cloves, finely chopped",
      "1 piece fresh ginger (½ inch), finely chopped (about 2 tsp)",
      "3 scallions, finely chopped",
      "¼ cup light soy sauce",
      "1 tbsp toasted sesame oil",
      "2 tsp granulated garlic",
      "2 tsp onion powder",
      "2 tsp light brown sugar",
      "1 tsp cornstarch (for sauce) + ¼ cup cornstarch (for coating tofu)",
      "½ cup water",
      "4 tbsp vegetable oil, divided",
      "Kosher salt and pepper to taste",
      "Toasted sesame seeds for garnish",
      "Rice for serving"
    ],
    steps: "Whisk together soy sauce, sesame oil, brown sugar, 1 tsp cornstarch, and ½ cup water in a small bowl. Set aside. Cut tofu into 1-inch cubes and pat completely dry with paper towels. Toss tofu with granulated garlic, onion powder, salt, pepper, and ¼ cup cornstarch until fully coated. Heat 2 tbsp vegetable oil in a large skillet over medium heat. Add tofu and cook turning occasionally until all sides are golden, 10–12 min. Transfer to a plate and season with salt. In the same skillet heat 1 tbsp oil over medium heat. Add broccoli and cook undisturbed until lightly charred on the bottom, 2–3 min — do not move them. Toss and cook until other sides are darkened in spots, another 2–3 min. Add remaining 1 tbsp oil, garlic, ginger, and scallions to the skillet. Stir until fragrant, 1–2 min. Reduce heat to low, add tofu back in, and pour in the reserved sauce. Bring to a simmer tossing frequently until tofu and broccoli are evenly glazed, 30–60 seconds. Serve topped with toasted sesame seeds over rice.",
    tip: "Tofu often comes out best if you give it time to dry out, such as overnight, removing excess liquid and allowing it to absorb more flavors.Do not move the broccoli while it chars — that's where the flavor comes from. Leftovers keep 3 days. For meal prep store tofu and broccoli separately from rice and combine when reheating."
  },

  // -------------------------------------------------------
  //  ADD NEW RECIPES ABOVE THIS LINE
  //  Copy any object above, paste it here, change the id,
  //  fill in the fields, save, then: git add . && git commit -m "add recipe" && git push
  // -------------------------------------------------------

]; // <-- end of RECIPES array


// =========================================================
//  APP STATE  — no need to edit below this line
// =========================================================
const STORAGE_KEY = "recipe-book-favs";
let favs = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));
let activeFilter = "all";
let openCards = new Set();

function saveFavs() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...favs]));
}

function toggleFav(id, e) {
  e.stopPropagation();
  if (favs.has(id)) favs.delete(id);
  else favs.add(id);
  saveFavs();
  renderAll();
}

function toggleDetail(id) {
  if (openCards.has(id)) openCards.delete(id);
  else openCards.add(id);
  renderAll();
}

function getFiltered() {
  const q = document.getElementById("search").value.toLowerCase().trim();
  return RECIPES.filter(r => {
    if (activeFilter === "fav"         && !favs.has(r.id))            return false;
    if (activeFilter === "chicken"     && r.protein !== "chicken")     return false;
    if (activeFilter === "beef"        && r.protein !== "beef")        return false;
    if (activeFilter === "fish"        && r.protein !== "fish")        return false;
    if (activeFilter === "vegetarian"  && r.protein !== "vegetarian")  return false;
    if (activeFilter === "snack"       && r.protein !== "snack")       return false;
    if (q) {
      const hay = (r.title + " " + r.tags.join(" ") + " " + r.desc + " " + r.ing.join(" ")).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function badge(cls, label) {
  return `<span class="badge ${cls}">${label}</span>`;
}

function proteinBadge(p) {
  switch(p) {
    case "chicken":    return badge("badge-chicken",    "Chicken");
    case "beef":       return badge("badge-beef",       "Beef");
    case "fish":       return badge("badge-fish",       "Fish");
    case "vegetarian": return badge("badge-vegetarian", "Vegetarian");
    case "snack":      return badge("badge-snack",      "Snack");
    default:           return "";
  }
}

function cardHTML(r) {
  const isOpen  = openCards.has(r.id);
  const isFav   = favs.has(r.id);
  const classes = ["card", r.isLettuce ? "is-lettuce" : "", isFav ? "is-fav" : ""].filter(Boolean).join(" ");

  const extraBadges = [
    r.isLettuce ? badge("badge-ltr",  "Lettuce bowl") : "",
    r.isNew     ? badge("badge-new",  "New")           : "",
    (r.prep && r.protein !== "snack") ? badge("badge-prep", "Meal-prep") : ""
  ].join("");

  const ing = r.ing.map(i => `<li>${i}</li>`).join("");

  return `
    <div class="${classes}" id="card-${r.id}">
      <div class="card-top">
        <span class="card-title">${r.title}</span>
        <button class="fav-btn ${isFav ? "active" : ""}"
                onclick="toggleFav('${r.id}', event)"
                aria-label="${isFav ? "Remove from" : "Add to"} favorites">
          ${isFav ? "&#9733;" : "&#9734;"}
        </button>
      </div>

      <div class="badge-row">${proteinBadge(r.protein)}${extraBadges}</div>

      <div class="macro-row">
        <div class="macro"><span class="macro-val">${r.cal}</span><span class="macro-lbl">cal</span></div>
        <div class="macro-divider"></div>
        <div class="macro"><span class="macro-val">${r.proteinG}g</span><span class="macro-lbl">protein</span></div>
        <div class="macro-divider"></div>
        <div class="macro"><span class="macro-val">${r.fiber}g</span><span class="macro-lbl">fiber</span></div>
        <div class="macro-divider"></div>
        <div class="macro"><span class="macro-val">${r.cost}</span><span class="macro-lbl">cost</span></div>
      </div>

      <div class="tag-row">${r.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>

      <p class="card-desc">${r.desc}</p>

      <button class="expand-btn ${isOpen ? "open" : ""}" onclick="toggleDetail('${r.id}')">
        <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        ${isOpen ? "Hide" : "Show"} ingredients & steps
      </button>

      <div class="card-detail ${isOpen ? "open" : ""}">
        <div>
          <h4>Ingredients</h4>
          <ul>${ing}</ul>
        </div>
        <div>
          <h4>Steps</h4>
          <p>${r.steps}</p>
        </div>
   <div class="prep-tip">${r.serves ? `<strong>Serves ${r.serves}</strong> &nbsp;&middot;&nbsp; ` : ""}<strong>Prep tip:</strong> ${r.tip}</div>
      </div>
    </div>`;
}

function renderAll() {
  const filtered  = getFiltered();
  const meals     = filtered.filter(r => r.protein !== "snack");
  const snacks    = filtered.filter(r => r.protein === "snack");
  const totalMeals  = RECIPES.filter(r => r.protein !== "snack").length;
  const totalSnacks = RECIPES.filter(r => r.protein === "snack").length;

  document.getElementById("header-meta").textContent =
    `${totalMeals} meals · ${totalSnacks} snacks`;

  document.getElementById("count-line").textContent =
    filtered.length === RECIPES.length
      ? `Showing all ${RECIPES.length} recipes`
      : `Showing ${filtered.length} of ${RECIPES.length} recipes`;

  let html = "";

  if (meals.length) {
    if (snacks.length || activeFilter === "all") {
      html += `<div class="section-label">Meals (${meals.length})</div>`;
    }
    html += `<div class="recipe-grid">${meals.map(cardHTML).join("")}</div>`;
  }

  if (snacks.length) {
    html += `<div class="section-label">Snacks (${snacks.length})</div>`;
    html += `<div class="recipe-grid">${snacks.map(cardHTML).join("")}</div>`;
  }

  if (!filtered.length) {
    html = `<div class="empty">No recipes match — try a different filter or clear the search.</div>`;
  }

  document.getElementById("recipe-output").innerHTML = html;
}

// Wire up filter buttons
document.getElementById("filter-row").addEventListener("click", e => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  activeFilter = btn.dataset.filter;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  openCards.clear();
  renderAll();
});

// Wire up search
document.getElementById("search").addEventListener("input", renderAll);

// Initial render
renderAll();