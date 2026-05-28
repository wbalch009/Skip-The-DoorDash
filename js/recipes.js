
    // =========================================================
    //  HOW TO ADD A NEW RECIPE
    //  Copy one of the objects below and paste it into the
    //  RECIPES array. Fill in all fields. Key fields:
    //
    //  id       — unique string, e.g. "r20" (never reuse one)
    //  title    — recipe name
    //  cal      — calories per serving (number)
    //  protein  — grams protein (number)
    //  fiber    — grams fiber (number)
    //  cost     — "$" or "$$" or "$$$"
    //  cuisine  — "southwest" | "asian" | "other" | "snack"
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
      //  SOUTHWEST MEALS
      // -------------------------------------------------------
      {
        id: "r1",
        title: "Black bean & corn taco bowls",
        cal: 420, protein: 28, fiber: 18, cost: "$",
        cuisine: "southwest", prep: true,
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
        id: "r2",
        title: "White bean & chicken chili",
        cal: 380, protein: 42, fiber: 14, cost: "$",
        cuisine: "southwest", prep: true,
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
        id: "r3",
        title: "Three-bean veggie chili",
        cal: 360, protein: 20, fiber: 22, cost: "$",
        cuisine: "southwest", prep: true,
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

      {
        id: "r4",
        title: "Southwest chicken thigh burrito bowl",
        cal: 620, protein: 50, fiber: 18, cost: "$",
        cuisine: "southwest", prep: true,
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
        id: "r5",
        title: "Ground beef & sweet potato taco bowl",
        cal: 600, protein: 40, fiber: 15, cost: "$",
        cuisine: "southwest", prep: true,
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
        cal: 560, protein: 44, fiber: 20, cost: "$",
        cuisine: "southwest", prep: true,
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

      // -------------------------------------------------------
      //  LETTUCE BOWLS (isLettuce: true)
      // -------------------------------------------------------
      {
        id: "r12",
        title: "Southwest chicken lettuce wrap bowl",
        cal: 420, protein: 46, fiber: 12, cost: "$",
        cuisine: "southwest", prep: true, isLettuce: true,
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
        cal: 450, protein: 48, fiber: 15, cost: "$",
        cuisine: "southwest", prep: true, isLettuce: true,
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
        cal: 430, protein: 44, fiber: 13, cost: "$",
        cuisine: "southwest", prep: true, isLettuce: true,
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
        cal: 410, protein: 43, fiber: 14, cost: "$",
        cuisine: "southwest", prep: true, isLettuce: true,
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
        cal: 440, protein: 47, fiber: 14, cost: "$",
        cuisine: "other", prep: true, isLettuce: true,
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

      // -------------------------------------------------------
      //  ASIAN MEALS
      // -------------------------------------------------------
      {
        id: "r7",
        title: "Korean-style beef & rice bowl (bibimbap-inspired)",
        cal: 580, protein: 42, fiber: 10, cost: "$",
        cuisine: "asian", prep: true,
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
        id: "r8",
        title: "Thai peanut chicken bowl",
        cal: 550, protein: 44, fiber: 9, cost: "$",
        cuisine: "asian", prep: true,
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
        id: "r9",
        title: "Teriyaki salmon rice bowl",
        cal: 560, protein: 46, fiber: 8, cost: "$$",
        cuisine: "asian", prep: false,
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

      {
        id: "r10",
        title: "Japanese chicken & lentil rice bowl",
        cal: 520, protein: 45, fiber: 14, cost: "$",
        cuisine: "asian", prep: true,
        tags: ["chicken breast", "lentils", "soy sauce", "mirin", "bok choy", "rice"],
        desc: "Chicken breast with a soy-mirin glaze over a rice-lentil blend with bok choy. Lentils add huge fiber boost with no noticeable flavor change.",
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
        cal: 540, protein: 40, fiber: 12, cost: "$",
        cuisine: "asian", prep: true,
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

      // -------------------------------------------------------
      //  OTHER MEALS
      // -------------------------------------------------------
      {
        id: "r17",
        title: "Chicken & white bean pasta bowl",
        cal: 570, protein: 48, fiber: 14, cost: "$",
        cuisine: "other", prep: true,
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

      {
        id: "r18",
        title: "Ground beef & potato hash bowl",
        cal: 580, protein: 40, fiber: 11, cost: "$",
        cuisine: "other", prep: true,
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
      //  SNACKS
      // -------------------------------------------------------
      {
        id: "s1",
        title: "Greek yogurt parfait",
        cal: 280, protein: 28, fiber: 6, cost: "$",
        cuisine: "snack", prep: true,
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
        cal: 220, protein: 24, fiber: 4, cost: "$",
        cuisine: "snack", prep: true,
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
        cal: 200, protein: 10, fiber: 8, cost: "$",
        cuisine: "snack", prep: true,
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
        cal: 210, protein: 22, fiber: 2, cost: "$",
        cuisine: "snack", prep: true,
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
        cal: 250, protein: 12, fiber: 9, cost: "$",
        cuisine: "snack", prep: true,
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
        cal: 260, protein: 14, fiber: 5, cost: "$",
        cuisine: "snack", prep: false,
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
      }

      // -------------------------------------------------------
      //  ADD NEW RECIPES BELOW THIS LINE
      //  Copy the template above, fill it in, and save.
      //  Then commit and push to GitHub — done!
      // -------------------------------------------------------

    ]; // <-- end of RECIPES array

    // =========================================================
    //  APP STATE  (no need to edit below this line)
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
        if (activeFilter === "fav"       && !favs.has(r.id))          return false;
        if (activeFilter === "southwest" && r.cuisine !== "southwest") return false;
        if (activeFilter === "asian"     && r.cuisine !== "asian")     return false;
        if (activeFilter === "lettuce"   && !r.isLettuce)              return false;
        if (activeFilter === "snack"     && r.cuisine !== "snack")     return false;
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

    function cardHTML(r) {
      const isOpen  = openCards.has(r.id);
      const isFav   = favs.has(r.id);
      const classes = ["card", r.isLettuce ? "is-lettuce" : "", isFav ? "is-fav" : ""].filter(Boolean).join(" ");

      const cuiseBadge =
        r.cuisine === "southwest" ? badge("badge-sw",    "Southwest") :
        r.cuisine === "asian"     ? badge("badge-as",    "Asian") :
        r.cuisine === "snack"     ? badge("badge-snack", "Snack") :
                                    badge("badge-other", "Other");

      const extraBadges = [
        r.isLettuce ? badge("badge-ltr",  "Lettuce bowl") : "",
        r.isNew     ? badge("badge-new",  "New")           : "",
        (r.prep && r.cuisine !== "snack") ? badge("badge-prep", "Meal-prep") : ""
      ].join("");

      const ing  = r.ing.map(i => `<li>${i}</li>`).join("");

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

          <div class="badge-row">${cuiseBadge}${extraBadges}</div>

          <div class="macro-row">
            <div class="macro"><span class="macro-val">${r.cal}</span><span class="macro-lbl">cal</span></div>
            <div class="macro-divider"></div>
            <div class="macro"><span class="macro-val">${r.protein}g</span><span class="macro-lbl">protein</span></div>
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
            <div class="prep-tip"><strong>Prep tip:</strong> ${r.tip}</div>
          </div>
        </div>`;
    }

    function renderAll() {
      const filtered = getFiltered();
      const meals  = filtered.filter(r => r.cuisine !== "snack");
      const snacks = filtered.filter(r => r.cuisine === "snack");

      const totalMeals  = RECIPES.filter(r => r.cuisine !== "snack").length;
      const totalSnacks = RECIPES.filter(r => r.cuisine === "snack").length;
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
