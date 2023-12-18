use recipes_project;
db.dropDatabase();

db.recipes.insertMany([

    {
        meal: {
          favourited: true,
          in_shopping_bag: true,
          name: "Classic Spaghetti Bolognese",
          description: "A timeless Italian pasta dish with a rich and hearty meat sauce.",
          image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/the-best-spaghetti-bolognese-7e83155.jpg?resize=500,500",
          ingredients: [
            "200g ground beef",
            "1 onion, finely chopped",
            "2 cloves garlic, minced",
            "1 can (14 oz) crushed tomatoes",
            "1/2 cup red wine",
            "1 tablespoon olive oil",
            "1 teaspoon dried oregano",
            "Salt and pepper to taste",
            "250g spaghetti",
            "Grated Parmesan cheese for garnish"
          ],
          nutrition: {
            calories: 450,
            protein: 20,
            carbohydrates: 40,
            fiber: 4,
            sugar: 6,
            fat: 22
          },
          preparation_time: 15,
          cooking_time: 45,
          method: [
            "In a large skillet, heat olive oil and brown the ground beef.",
            "Add chopped onion and garlic, sauté until fragrant.",
            "Stir in crushed tomatoes, red wine, and dried oregano. Simmer for 30 minutes, stirring occasionally.",
            "Season with salt and pepper to taste.",
            "Boil spaghetti until al dente, drain, and serve with the meat sauce.",
            "Garnish with grated Parmesan cheese.",
            "Enjoy your classic Spaghetti Bolognese!"
          ],
          vegan: false,
          vegetarian: false,
          country_of_origin: "Italian"
        },
        shopping_list: {
          items: [
            "200g ground beef",
            "1 onion",
            "2 cloves garlic",
            "1 can (14 oz) crushed tomatoes",
            "1/2 cup red wine",
            "1 tablespoon olive oil",
            "1 teaspoon dried oregano",
            "Salt",
            "Pepper",
            "250g spaghetti",
            "Grated Parmesan cheese"
          ]
        }
      },

      {
        meal: {
          favourited: true,
          in_shopping_bag: false,
          name: "Vegetable Stir-Fry",
          description: "A quick and healthy stir-fry packed with colorful vegetables and tofu.",
          image: "https://www.wholesomeyum.com/wp-content/uploads/2020/11/wholesomeyum-how-to-stir-fry-vegetables-vegetable-stir-fry-recipe-list-15-500x500.jpg",
          ingredients: [
            "1 block (14 oz) tofu, cubed",
            "1 red bell pepper, sliced",
            "1 yellow bell pepper, sliced",
            "1 broccoli head, florets separated",
            "1 carrot, sliced",
            "2 cloves garlic, minced",
            "2 tablespoons soy sauce",
            "1 tablespoon sesame oil",
            "1 tablespoon cornstarch",
            "Cooking oil for stir-frying",
            "Cooked rice for serving"
          ],
          nutrition: {
            calories: 350,
            protein: 15,
            carbohydrates: 40,
            fiber: 8,
            sugar: 6,
            fat: 15
          },
          preparation_time: 20,
          cooking_time: 15,
          method: [
            "In a bowl, mix soy sauce, sesame oil, and cornstarch to create a sauce.",
            "In a wok or large pan, heat cooking oil and stir-fry tofu until golden brown. Remove from the pan.",
            "Stir-fry garlic and vegetables until tender-crisp.",
            "Return tofu to the pan, add the sauce, and stir-fry for a few minutes.",
            "Serve over cooked rice.",
            "Enjoy your vegetable stir-fry!"
          ],
          vegan: true,
          vegetarian: true,
          country_of_origin: "Chinese"
        },
        shopping_list: {
          items: [
            "1 block (14 oz) tofu",
            "1 red bell pepper",
            "1 yellow bell pepper",
            "1 broccoli head",
            "1 carrot",
            "2 cloves garlic",
            "2 tablespoons soy sauce",
            "1 tablespoon sesame oil",
            "1 tablespoon cornstarch",
            "Cooking oil",
            "Cooked rice"
          ]
        }
      },

      {
        meal: {
          favourited: false,
          in_shopping_bag: false,
          name: "Irish Stew",
          description: "A hearty Irish stew with tender lamb, potatoes, carrots, and onions.",
          image: "https://simply-delicious-food.com/wp-content/uploads/2019/02/irish-beef-stew-1-500x500.jpg",
          ingredients: [
            "500g boneless lamb shoulder, cubed",
            "4 large potatoes, peeled and diced",
            "2 carrots, sliced",
            "2 onions, chopped",
            "2 cloves garlic, minced",
            "2 cups beef broth",
            "1 cup Guinness stout",
            "2 tablespoons butter",
            "2 tablespoons all-purpose flour",
            "2 bay leaves",
            "Salt and pepper to taste",
            "Fresh parsley for garnish"
          ],
          nutrition: {
            calories: 450,
            protein: 20,
            carbohydrates: 40,
            fiber: 5,
            sugar: 5,
            fat: 20
          },
          preparation_time: 20,
          cooking_time: 90,
          method: [
            "In a large pot, melt butter and brown lamb cubes.",
            "Add onions and garlic, sauté until softened.",
            "Sprinkle flour and cook for a few minutes to create a roux.",
            "Pour in Guinness stout, beef broth, and add bay leaves. Bring to a simmer.",
            "Add potatoes and carrots, simmer for 60-70 minutes until lamb and vegetables are tender.",
            "Season with salt and pepper, garnish with fresh parsley.",
            "Enjoy your hearty Irish Stew!"
          ],
          vegan: false,
          vegetarian: false,
          country_of_origin: "Irish"
        },
        shopping_list: {
          items: [
            "500g boneless lamb shoulder",
            "4 large potatoes",
            "2 carrots",
            "2 onions",
            "2 cloves garlic",
            "2 cups beef broth",
            "1 cup Guinness stout",
            "2 tablespoons butter",
            "2 tablespoons all-purpose flour",
            "2 bay leaves",
            "Salt",
            "Pepper",
            "Fresh parsley"
          ]
        }
      },

      {
        meal: {
          favourited: false,
          in_shopping_bag: false,
          name: "BBQ Pulled Pork Sandwich",
          description: "A classic American sandwich with tender pulled pork in barbecue sauce on a bun.",
          image: "https://keviniscooking.com/wp-content/uploads/2023/04/Southern-Pulled-Pork-Sandwich-square-500x500.jpg",
          ingredients: [
            "1.5 kg pork shoulder roast",
            "1 cup barbecue sauce",
            "1 onion, thinly sliced",
            "4 hamburger buns",
            "Coleslaw for topping",
            "Pickle slices for garnish",
            "Salt and pepper to taste"
          ],
          nutrition: {
            calories: 500,
            protein: 25,
            carbohydrates: 40,
            fiber: 3,
            sugar: 20,
            fat: 25
          },
          preparation_time: 15,
          cooking_time: 6 * 60, // Slow-cooked for 6 hours
          method: [
            "Season pork shoulder with salt and pepper.",
            "Place in a slow cooker and pour barbecue sauce over it. Add sliced onions.",
            "Cover and cook on low for 6 hours until the pork is tender and can be pulled apart with a fork.",
            "Shred the pork and mix it with the sauce.",
            "Toast hamburger buns and fill with pulled pork.",
            "Top with coleslaw and garnish with pickle slices.",
            "Enjoy your BBQ Pulled Pork Sandwich!"
          ],
          vegan: false,
          vegetarian: false,
          country_of_origin: "American"
        },
        shopping_list: {
          items: [
            "1.5 kg pork shoulder roast",
            "1 cup barbecue sauce",
            "1 onion",
            "4 hamburger buns",
            "Coleslaw",
            "Pickle slices",
            "Salt",
            "Pepper"
          ]
        }
      },

      {
        meal: {
          favourited: false,
          in_shopping_bag: false,
          name: "Fish and Chips",
          description: "A classic British dish featuring crispy battered fish and thick-cut potato fries.",
          image: "https://www.corriecooks.com/wp-content/uploads/2023/04/Fish-And-Chips-2-500x500.jpg",
          ingredients: [
            "2 cod fillets",
            "4 large russet potatoes, cut into fries",
            "1 cup all-purpose flour",
            "1 teaspoon baking powder",
            "1 cup cold sparkling water",
            "Vegetable oil for frying",
            "Salt and malt vinegar for seasoning",
            "Peas or tartar sauce for serving"
          ],
          nutrition: {
            calories: 600,
            protein: 30,
            carbohydrates: 70,
            fiber: 5,
            sugar: 2,
            fat: 25
          },
          preparation_time: 30,
          cooking_time: 20,
          method: [
            "Heat vegetable oil in a deep fryer or large pot to 350°F (175°C).",
            "In a bowl, whisk flour, baking powder, and sparkling water to make a batter.",
            "Dip cod fillets in batter and fry until golden brown and crispy.",
            "In batches, fry potato fries until golden and crispy. Drain on paper towels.",
            "Season fish and fries with salt and malt vinegar.",
            "Serve with peas or tartar sauce. Enjoy Fish and Chips!"
          ],
          vegan: false,
          vegetarian: false,
          country_of_origin: "British"
        },
        shopping_list: {
          items: [
            "2 cod fillets",
            "4 large russet potatoes",
            "1 cup all-purpose flour",
            "1 teaspoon baking powder",
            "1 cup cold sparkling water",
            "Vegetable oil",
            "Salt",
            "Malt vinegar",
            "Peas or tartar sauce"
          ]
        }
      },

      {
        meal: {
          favourited: false,
          in_shopping_bag: false,
          name: "Pad Thai",
          description: "A classic Thai stir-fried noodle dish with shrimp, tofu, and a tangy tamarind sauce.",
          image: "https://www.kitchensanctuary.com/wp-content/uploads/2019/07/Pad-Thai-square-FS-29-500x500.jpg",
          ingredients: [
            "200g rice noodles",
            "150g shrimp, peeled and deveined",
            "150g firm tofu, cubed",
            "2 eggs, beaten",
            "1/2 cup bean sprouts",
            "2 cloves garlic, minced",
            "2 tablespoons tamarind paste",
            "2 tablespoons fish sauce",
            "1 tablespoon sugar",
            "1/4 cup roasted peanuts, chopped",
            "Lime wedges for garnish",
            "Fresh cilantro for garnish"
          ],
          nutrition: {
            calories: 400,
            protein: 20,
            carbohydrates: 50,
            fiber: 3,
            sugar: 8,
            fat: 15
          },
          preparation_time: 20,
          cooking_time: 15,
          method: [
            "Soak rice noodles in warm water until soft, then drain.",
            "In a wok, heat oil and stir-fry garlic, tofu, and shrimp until cooked.",
            "Push ingredients to one side and scramble eggs in the wok.",
            "Add drained noodles, tamarind paste, fish sauce, and sugar. Stir-fry until well combined.",
            "Add bean sprouts and chopped peanuts, toss for a minute.",
            "Garnish with lime wedges and fresh cilantro.",
            "Enjoy your flavorful Pad Thai!"
          ],
          vegan: false,
          vegetarian: false,
          country_of_origin: "Thai"
        },
        shopping_list: {
          items: [
            "200g rice noodles",
            "150g shrimp",
            "150g firm tofu",
            "2 eggs",
            "1/2 cup bean sprouts",
            "2 cloves garlic",
            "2 tablespoons tamarind paste",
            "2 tablespoons fish sauce",
            "1 tablespoon sugar",
            "1/4 cup roasted peanuts",
            "Lime wedges",
            "Fresh cilantro"
          ]
        }
      },

      {
        meal: {
          favourited: false,
          in_shopping_bag: false,
          name: "Greek Salad",
          description: "A refreshing Greek salad with tomatoes, cucumbers, olives, and feta cheese.",
          image: "https://amandascookin.com/wp-content/uploads/2022/05/Greek-Salad-RCSQ-500x500.jpg",
          ingredients: [
            "2 large tomatoes, diced",
            "1 cucumber, sliced",
            "1/2 red onion, thinly sliced",
            "1/2 cup Kalamata olives",
            "200g feta cheese, crumbled",
            "2 tablespoons olive oil",
            "1 tablespoon red wine vinegar",
            "1 teaspoon dried oregano",
            "Salt and pepper to taste",
            "Fresh oregano leaves for garnish"
          ],
          nutrition: {
            calories: 300,
            protein: 10,
            carbohydrates: 15,
            fiber: 5,
            sugar: 7,
            fat: 20
          },
          preparation_time: 15,
          cooking_time: 0,
          method: [
            "In a large bowl, combine diced tomatoes, sliced cucumber, red onion, and Kalamata olives.",
            "Add crumbled feta cheese and drizzle with olive oil and red wine vinegar.",
            "Sprinkle dried oregano, salt, and pepper. Toss to combine.",
            "Garnish with fresh oregano leaves.",
            "Serve your refreshing Greek Salad!"
          ],
          vegan: false,
          vegetarian: true,
          country_of_origin: "Greek"
        },
        shopping_list: {
          items: [
            "2 large tomatoes",
            "1 cucumber",
            "1/2 red onion",
            "1/2 cup Kalamata olives",
            "200g feta cheese",
            "2 tablespoons olive oil",
            "1 tablespoon red wine vinegar",
            "1 teaspoon dried oregano",
            "Salt",
            "Pepper",
            "Fresh oregano leaves"
          ]
        }
      },

      {
        meal: {
          favourited: false,
          in_shopping_bag: false,
          name: "Kung Pao Chicken",
          description: "A spicy and savory Chinese chicken dish with peanuts and vegetables.",
          image: "https://www.kitchensanctuary.com/wp-content/uploads/2019/10/Kung-Pao-Chicken-square-FS-39-new-500x500.jpg",
          ingredients: [
            "4 boneless chicken thighs, diced",
            "1/2 cup unsalted peanuts",
            "1 bell pepper, diced",
            "1 onion, chopped",
            "3 cloves garlic, minced",
            "2 tablespoons soy sauce",
            "1 tablespoon rice vinegar",
            "1 tablespoon hoisin sauce",
            "1 tablespoon Szechuan peppercorns",
            "1 teaspoon red pepper flakes",
            "1 teaspoon sugar",
            "2 tablespoons vegetable oil",
            "Green onions for garnish",
            "Cooked rice for serving"
          ],
          nutrition: {
            calories: 400,
            protein: 22,
            carbohydrates: 20,
            fiber: 3,
            sugar: 5,
            fat: 28
          },
          preparation_time: 20,
          cooking_time: 15,
          method: [
            "In a wok or skillet, heat vegetable oil and stir-fry chicken until browned.",
            "Remove chicken and stir-fry peanuts, garlic, and Szechuan peppercorns until fragrant.",
            "Add onions and bell pepper, stir-fry for a few minutes.",
            "Return chicken to the pan, add soy sauce, rice vinegar, hoisin sauce, and sugar. Cook until sauce thickens.",
            "Garnish with green onions and serve with cooked rice.",
            "Enjoy your spicy Kung Pao Chicken!"
          ],
          vegan: false,
          vegetarian: false,
          country_of_origin: "Chinese"
        },
        shopping_list: {
          items: [
            "4 boneless chicken thighs",
            "1/2 cup unsalted peanuts",
            "1 bell pepper",
            "1 onion",
            "3 cloves garlic",
            "2 tablespoons soy sauce",
            "1 tablespoon rice vinegar",
            "1 tablespoon hoisin sauce",
            "1 tablespoon Szechuan peppercorns",
            "1 teaspoon red pepper flakes",
            "1 teaspoon sugar",
            "2 tablespoons vegetable oil",
            "Green onions",
            "Cooked rice"
          ]
        }
      },

      {
        meal: {
          favourited: false,
          in_shopping_bag: false,
          name: "Chicken Tikka Masala",
          description: "A popular Indian dish with tender chicken in a creamy tomato and spice-infused sauce.",
          image: "https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Chicken-Tikka-Masala-square-FS-51-500x500.jpg",
          ingredients: [
            "4 boneless chicken breasts, cut into chunks",
            "1 cup plain yogurt",
            "2 tablespoons ginger-garlic paste",
            "1/2 cup tomato puree",
            "1/2 cup heavy cream",
            "1 onion, finely chopped",
            "2 teaspoons garam masala",
            "1 teaspoon turmeric",
            "1 teaspoon cumin",
            "1 teaspoon paprika",
            "Salt and pepper to taste",
            "Fresh cilantro for garnish",
            "Steamed rice for serving"
          ],
          nutrition: {
            calories: 550,
            protein: 30,
            carbohydrates: 20,
            fiber: 3,
            sugar: 5,
            fat: 40
          },
          preparation_time: 30,
          cooking_time: 30,
          method: [
            "Marinate chicken chunks in yogurt, ginger-garlic paste, and spices for 2 hours.",
            "Grill or pan-fry chicken until cooked through.",
            "In a separate pan, sauté onions and add tomato puree and spices. Cook until oil separates.",
            "Stir in heavy cream and cooked chicken. Simmer for 10 minutes.",
            "Garnish with fresh cilantro and serve with steamed rice.",
            "Enjoy your flavorful Chicken Tikka Masala!"
          ],
          vegan: false,
          vegetarian: false,
          country_of_origin: "Indian"
        },
        shopping_list: {
          items: [
            "4 boneless chicken breasts",
            "1 cup plain yogurt",
            "2 tablespoons ginger-garlic paste",
            "1/2 cup tomato puree",
            "1/2 cup heavy cream",
            "1 onion",
            "2 teaspoons garam masala",
            "1 teaspoon turmeric",
            "1 teaspoon cumin",
            "1 teaspoon paprika",
            "Salt",
            "Pepper",
            "Fresh cilantro",
            "Steamed rice"
          ]
        }
      },

      {
        meal: {
          favourited: false,
          in_shopping_bag: false,
          name: "Coq au Vin",
          description: "A classic French chicken stew simmered in red wine with mushrooms and onions.",
          image: "https://familystylefood.com/wp-content/uploads/2021/12/Coq-Au-Vin-hero-macro-500x500.jpg",
          ingredients: [
            "4 chicken thighs",
            "1/2 bottle red wine",
            "200g mushrooms, sliced",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "2 sprigs fresh thyme",
            "2 tablespoons butter",
            "2 tablespoons all-purpose flour",
            "Salt and pepper to taste",
            "Fresh parsley for garnish",
            "Mashed potatoes for serving"
          ],
          nutrition: {
            calories: 450,
            protein: 25,
            carbohydrates: 10,
            fiber: 2,
            sugar: 3,
            fat: 30
          },
          preparation_time: 20,
          cooking_time: 60,
          method: [
            "Season chicken thighs with salt and pepper.",
            "In a Dutch oven, melt butter and brown chicken on both sides. Remove and set aside.",
            "Sauté onions, garlic, and mushrooms until soft.",
            "Sprinkle flour and stir to create a roux.",
            "Return chicken to the pot, add red wine and thyme. Simmer for 45 minutes.",
            "Garnish with fresh parsley and serve with mashed potatoes.",
            "Enjoy your homemade Coq au Vin!"
          ],
          vegan: false,
          vegetarian: false,
          country_of_origin: "French"
        },
        shopping_list: {
          items: [
            "4 chicken thighs",
            "1/2 bottle red wine",
            "200g mushrooms",
            "1 onion",
            "2 cloves garlic",
            "2 sprigs fresh thyme",
            "2 tablespoons butter",
            "2 tablespoons all-purpose flour",
            "Salt",
            "Pepper",
            "Fresh parsley",
            "Mashed potatoes"
          ]
        }
      },

      {
        meal: {
          favourited: false,
          in_shopping_bag: false,
          name: "Tacos al Pastor",
          description: "Delicious Mexican street tacos with marinated pork, pineapple, and cilantro.",
          image: "https://www.seasonsandsuppers.ca/wp-content/uploads/2018/08/tacos-al-pastor-1200-500x500.jpg",
          ingredients: [
            "300g thinly sliced pork shoulder",
            "1/2 cup diced pineapple",
            "1 small onion, finely chopped",
            "2 cloves garlic, minced",
            "2 teaspoons chili powder",
            "1 teaspoon ground cumin",
            "1/2 teaspoon paprika",
            "1/4 cup fresh cilantro leaves",
            "8 small corn tortillas",
            "Lime wedges for garnish"
          ],
          nutrition: {
            calories: 350,
            protein: 18,
            carbohydrates: 35,
            fiber: 4,
            sugar: 7,
            fat: 16
          },
          preparation_time: 15,
          cooking_time: 20,
          method: [
            "In a bowl, mix chili powder, cumin, paprika, and garlic to create a marinade.",
            "Marinate pork slices in the mixture for at least 30 minutes.",
            "Heat a skillet and cook marinated pork until browned and cooked through.",
            "Warm corn tortillas in the skillet.",
            "Assemble tacos with pork, diced pineapple, chopped onion, and cilantro.",
            "Serve with lime wedges. Enjoy Tacos al Pastor!"
          ],
          vegan: false,
          vegetarian: false,
          country_of_origin: "Mexican"
        },
        shopping_list: {
          items: [
            "300g thinly sliced pork shoulder",
            "1/2 cup diced pineapple",
            "1 small onion",
            "2 cloves garlic",
            "2 teaspoons chili powder",
            "1 teaspoon ground cumin",
            "1/2 teaspoon paprika",
            "1/4 cup fresh cilantro leaves",
            "8 small corn tortillas",
            "Lime wedges"
          ]
        }
      },

      {
        meal: {
          favourited: false,
          in_shopping_bag: false,
          name: "Paella Valenciana",
          description: "A classic Spanish dish with saffron-infused rice, seafood, and vegetables.",
          image: "https://abountifulkitchen.com/wp-content/uploads/2021/07/IMG_9547-500x500.jpg",
          ingredients: [
            "250g bomba rice",
            "300g mixed seafood (shrimp, mussels, calamari)",
            "1 onion, finely chopped",
            "3 cloves garlic, minced",
            "1 red bell pepper, sliced",
            "1/2 cup frozen peas",
            "1 teaspoon saffron threads",
            "2 cups chicken broth",
            "1/4 cup white wine",
            "2 tablespoons olive oil",
            "Salt and pepper to taste",
            "Lemon wedges for garnish"
          ],
          nutrition: {
            calories: 500,
            protein: 25,
            carbohydrates: 60,
            fiber: 5,
            sugar: 3,
            fat: 18
          },
          preparation_time: 20,
          cooking_time: 40,
          method: [
            "In a paella pan, heat olive oil and sauté onion, garlic, and bell pepper until soft.",
            "Add bomba rice and saffron threads, stirring for a minute.",
            "Pour in white wine and chicken broth, bring to a simmer.",
            "Add mixed seafood and peas, cook until rice is tender and seafood is cooked through.",
            "Season with salt and pepper, garnish with lemon wedges.",
            "Serve your authentic Paella Valenciana!"
          ],
          vegan: false,
          vegetarian: false,
          country_of_origin: "Spanish"
        },
        shopping_list: {
          items: [
            "250g bomba rice",
            "300g mixed seafood",
            "1 onion",
            "3 cloves garlic",
            "1 red bell pepper",
            "1/2 cup frozen peas",
            "1 teaspoon saffron threads",
            "2 cups chicken broth",
            "1/4 cup white wine",
            "2 tablespoons olive oil",
            "Salt",
            "Pepper",
            "Lemon wedges"
          ]
        }
      }
    ,
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Chicken Enchiladas",
        description: "A delicious Mexican dish with shredded chicken wrapped in tortillas and smothered in enchilada sauce.",
        image: "https://www.jessicagavin.com/wp-content/uploads/2018/04/chicken-enchiladas-5-1200-500x500.jpg",
        ingredients: [
          "2 cups cooked chicken, shredded",
          "1 onion, chopped",
          "2 cloves garlic, minced",
          "1 can (14 oz) enchilada sauce",
          "1 cup shredded cheddar cheese",
          "8 small flour tortillas",
          "1 teaspoon ground cumin",
          "1 teaspoon chili powder",
          "Salt and pepper to taste",
          "Sour cream and chopped cilantro for garnish"
        ],
        nutrition: {
          calories: 350,
          protein: 20,
          carbohydrates: 30,
          fiber: 5,
          sugar: 3,
          fat: 15
        },
        preparation_time: 20,
        cooking_time: 30,
        method: [
          "In a skillet, sauté onions and garlic until soft.",
          "Add shredded chicken, ground cumin, and chili powder. Cook for a few minutes.",
          "Pour a small amount of enchilada sauce into the bottom of a baking dish.",
          "Place a portion of the chicken mixture onto each tortilla, roll them up, and arrange them in the baking dish.",
          "Pour the remaining enchilada sauce over the top and sprinkle with cheese.",
          "Bake at 350°F (175°C) for 20-25 minutes until bubbly and golden.",
          "Garnish with sour cream and chopped cilantro.",
          "Enjoy your Chicken Enchiladas!"
        ],
        vegan: false,
        vegetarian: false,
        country_of_origin: "Mexican"
      },
      shopping_list: {
        items: [
          "2 cups cooked chicken",
          "1 onion",
          "2 cloves garlic",
          "1 can (14 oz) enchilada sauce",
          "1 cup shredded cheddar cheese",
          "8 small flour tortillas",
          "1 teaspoon ground cumin",
          "1 teaspoon chili powder",
          "Salt",
          "Pepper",
          "Sour cream",
          "Cilantro"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Beef and Broccoli Stir-Fry",
        description: "A savory Chinese stir-fry with tender beef slices and broccoli florets in a flavorful sauce.",
        image: "https://www.chewoutloud.com/wp-content/uploads/2020/02/Beef-and-Broccoli-0-500x500.jpg",
        ingredients: [
          "300g beef sirloin, thinly sliced",
          "2 cups broccoli florets",
          "1 onion, thinly sliced",
          "3 cloves garlic, minced",
          "1/4 cup soy sauce",
          "2 tablespoons oyster sauce",
          "1 tablespoon cornstarch",
          "1 teaspoon ginger, grated",
          "Cooking oil for stir-frying",
          "Cooked rice for serving"
        ],
        nutrition: {
          calories: 400,
          protein: 25,
          carbohydrates: 20,
          fiber: 3,
          sugar: 5,
          fat: 20
        },
        preparation_time: 15,
        cooking_time: 15,
        method: [
          "In a bowl, mix soy sauce, oyster sauce, cornstarch, and grated ginger to create a sauce.",
          "In a wok or large pan, heat cooking oil and stir-fry beef until browned. Remove from the pan.",
          "Stir-fry garlic and onion until fragrant, then add broccoli florets.",
          "Return beef to the pan, add the sauce, and stir-fry for a few minutes.",
          "Serve over cooked rice.",
          "Enjoy your Beef and Broccoli Stir-Fry!"
        ],
        vegan: false,
        vegetarian: false,
        country_of_origin: "Chinese"
      },
      shopping_list: {
        items: [
          "300g beef sirloin",
          "2 cups broccoli florets",
          "1 onion",
          "3 cloves garlic",
          "1/4 cup soy sauce",
          "2 tablespoons oyster sauce",
          "1 tablespoon cornstarch",
          "1 teaspoon ginger",
          "Cooking oil",
          "Cooked rice"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Margherita Pizza",
        description: "A classic Italian pizza topped with tomato sauce, fresh mozzarella, and basil leaves.",
        image: "https://www.scrumptiously.com/wp-content/uploads/2023/07/MargheritaPizza-500x500.webp",
        ingredients: [
          "1 pizza dough",
          "1/2 cup tomato sauce",
          "200g fresh mozzarella cheese, sliced",
          "Fresh basil leaves",
          "2 cloves garlic, minced",
          "2 tablespoons olive oil",
          "Salt and pepper to taste"
        ],
        nutrition: {
          calories: 300,
          protein: 12,
          carbohydrates: 35,
          fiber: 2,
          sugar: 2,
          fat: 12
        },
        preparation_time: 15,
        cooking_time: 15,
        method: [
          "Preheat your oven to the highest temperature (usually around 500°F or 260°C).",
          "Roll out the pizza dough on a floured surface to your desired thickness.",
          "Transfer the dough to a pizza stone or baking sheet.",
          "Spread tomato sauce evenly over the dough, leaving a border for the crust.",
          "Place fresh mozzarella slices on top of the sauce.",
          "Sprinkle minced garlic over the pizza and drizzle with olive oil.",
          "Season with salt and pepper.",
          "Bake in the preheated oven for 12-15 minutes until the crust is golden and the cheese is bubbly.",
          "Remove from the oven, garnish with fresh basil leaves, and slice.",
          "Enjoy your Margherita Pizza!"
        ],
        vegan: false,
        vegetarian: true,
        country_of_origin: "Italian"
      },
      shopping_list: {
        items: [
          "1 pizza dough",
          "1/2 cup tomato sauce",
          "200g fresh mozzarella cheese",
          "Fresh basil leaves",
          "2 cloves garlic",
          "2 tablespoons olive oil",
          "Salt",
          "Pepper"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Thai Green Curry",
        description: "A fragrant and spicy Thai curry with chicken, vegetables, and coconut milk.",
        image: "https://www.whiskaffair.com/wp-content/uploads/2016/07/Thai-Green-Curry-3-500x500.jpg",
        ingredients: [
          "300g chicken breast, sliced",
          "1 can (14 oz) coconut milk",
          "1 green bell pepper, sliced",
          "1 red bell pepper, sliced",
          "1 zucchini, sliced",
          "2 tablespoons green curry paste",
          "1 tablespoon fish sauce",
          "1 tablespoon brown sugar",
          "Fresh basil leaves for garnish",
          "Cooked jasmine rice for serving"
        ],
        nutrition: {
          calories: 450,
          protein: 20,
          carbohydrates: 20,
          fiber: 5,
          sugar: 6,
          fat: 30
        },
        preparation_time: 20,
        cooking_time: 20,
        method: [
          "In a wok or large pan, heat a portion of the coconut milk until it simmers and thickens.",
          "Add green curry paste and stir-fry for a few minutes until fragrant.",
          "Add chicken slices and cook until no longer pink.",
          "Stir in the remaining coconut milk, fish sauce, and brown sugar.",
          "Add sliced vegetables and simmer until tender.",
          "Serve over cooked jasmine rice and garnish with fresh basil leaves.",
          "Enjoy your Thai Green Curry!"
        ],
        vegan: false,
        vegetarian: false,
        country_of_origin: "Thai"
      },
      shopping_list: {
        items: [
          "300g chicken breast",
          "1 can (14 oz) coconut milk",
          "1 green bell pepper",
          "1 red bell pepper",
          "1 zucchini",
          "2 tablespoons green curry paste",
          "1 tablespoon fish sauce",
          "1 tablespoon brown sugar",
          "Fresh basil leaves",
          "Jasmine rice"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Caprese Salad",
        description: "A simple Italian salad featuring fresh tomatoes, mozzarella cheese, basil, and a drizzle of balsamic glaze.",
        image: "https://carlsbadcravings.com/wp-content/uploads/2023/08/Caprese-Salad-3-500x500.jpg",
        ingredients: [
          "4 ripe tomatoes, sliced",
          "200g fresh mozzarella cheese, sliced",
          "Fresh basil leaves",
          "2 tablespoons balsamic glaze",
          "2 tablespoons extra-virgin olive oil",
          "Salt and pepper to taste"
        ],
        nutrition: {
          calories: 250,
          protein: 10,
          carbohydrates: 8,
          fiber: 2,
          sugar: 5,
          fat: 20
        },
        preparation_time: 10,
        cooking_time: 0,
        method: [
          "Arrange slices of ripe tomatoes and fresh mozzarella cheese on a serving platter.",
          "Tuck fresh basil leaves between the slices.",
          "Drizzle with balsamic glaze and extra-virgin olive oil.",
          "Season with salt and pepper to taste.",
          "Serve immediately as a refreshing Caprese Salad!"
        ],
        vegan: false,
        vegetarian: true,
        country_of_origin: "Italian"
      },
      shopping_list: {
        items: [
          "4 ripe tomatoes",
          "200g fresh mozzarella cheese",
          "Fresh basil leaves",
          "Balsamic glaze",
          "Extra-virgin olive oil",
          "Salt",
          "Pepper"
        ]
      }
    },{
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Vegetarian Pad Thai",
        description: "A delicious and tangy Thai stir-fried noodle dish with tofu, vegetables, and a flavorful tamarind sauce.",
        image: "https://pinchofyum.com/wp-content/uploads/Vegetarian-Pad-Thai-Recipe.jpg",
        ingredients: [
          "200g rice noodles",
          "200g tofu, cubed",
          "1 red bell pepper, sliced",
          "1 carrot, julienned",
          "2 cloves garlic, minced",
          "2 tablespoons tamarind paste",
          "2 tablespoons soy sauce",
          "1 tablespoon brown sugar",
          "2 tablespoons vegetable oil",
          "Chopped peanuts and lime wedges for garnish"
        ],
        nutrition: {
          calories: 350,
          protein: 12,
          carbohydrates: 55,
          fiber: 5,
          sugar: 8,
          fat: 10
        },
        preparation_time: 15,
        cooking_time: 15,
        method: [
          "Cook rice noodles according to package instructions and set aside.",
          "In a wok or large pan, heat vegetable oil and add cubed tofu. Stir-fry until golden brown. Remove from the pan.",
          "Stir-fry garlic, red bell pepper, and julienned carrot until tender.",
          "In a small bowl, mix tamarind paste, soy sauce, and brown sugar to make the sauce. Add it to the pan.",
          "Return tofu and cooked rice noodles to the pan, tossing to combine and heat through.",
          "Serve garnished with chopped peanuts and lime wedges.",
          "Enjoy your Vegetarian Pad Thai!"
        ],
        vegan: true,
        vegetarian: true,
        country_of_origin: "Thai"
      },
      shopping_list: {
        items: [
          "200g rice noodles",
          "200g tofu",
          "1 red bell pepper",
          "1 carrot",
          "2 cloves garlic",
          "2 tablespoons tamarind paste",
          "2 tablespoons soy sauce",
          "1 tablespoon brown sugar",
          "Vegetable oil",
          "Chopped peanuts",
          "Lime wedges"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Spaghetti Carbonara",
        description: "A classic Italian pasta dish with creamy egg sauce, crispy bacon, and Parmesan cheese.",
        image: "https://www.sipandfeast.com/wp-content/uploads/2022/09/spaghetti-carbonara-recipe-snippet-500x500.jpg",
        ingredients: [
          "200g spaghetti",
          "150g pancetta or bacon, diced",
          "2 large eggs",
          "1 cup grated Parmesan cheese",
          "2 cloves garlic, minced",
          "Freshly ground black pepper",
          "Chopped parsley for garnish"
        ],
        nutrition: {
          calories: 500,
          protein: 20,
          carbohydrates: 40,
          fiber: 2,
          sugar: 2,
          fat: 30
        },
        preparation_time: 10,
        cooking_time: 15,
        method: [
          "Cook spaghetti according to package instructions and drain, reserving some pasta water.",
          "In a skillet, cook diced pancetta or bacon until crispy. Remove from the pan and drain on paper towels.",
          "In a bowl, whisk eggs, grated Parmesan cheese, minced garlic, and a generous amount of freshly ground black pepper.",
          "Add cooked spaghetti to the skillet with the bacon, then quickly pour the egg and cheese mixture over it. Toss to combine, using reserved pasta water to create a creamy sauce if needed.",
          "Garnish with chopped parsley and more grated Parmesan cheese.",
          "Serve your Spaghetti Carbonara immediately!"
        ],
        vegan: false,
        vegetarian: false,
        country_of_origin: "Italian"
      },
      shopping_list: {
        items: [
          "200g spaghetti",
          "150g pancetta or bacon",
          "2 large eggs",
          "1 cup grated Parmesan cheese",
          "2 cloves garlic",
          "Freshly ground black pepper",
          "Chopped parsley"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Spinach and Mushroom Stuffed Chicken Breast",
        description: "Tender chicken breasts stuffed with a flavorful mixture of spinach, mushrooms, and cheese, then baked to perfection.",
        image: "https://cookingformysoul.com/wp-content/uploads/2022/02/spinach-stuffed-chicken-feat-min-500x500.jpg",
        ingredients: [
          "4 boneless, skinless chicken breasts",
          "200g mushrooms, chopped",
          "2 cups fresh spinach",
          "1/2 cup shredded mozzarella cheese",
          "2 cloves garlic, minced",
          "1 teaspoon olive oil",
          "Salt and pepper to taste",
          "Toothpicks for securing"
        ],
        nutrition: {
          calories: 300,
          protein: 40,
          carbohydrates: 5,
          fiber: 2,
          sugar: 2,
          fat: 12
        },
        preparation_time: 20,
        cooking_time: 25,
        method: [
          "Preheat your oven to 375°F (190°C).",
          "In a skillet, heat olive oil and sauté chopped mushrooms and minced garlic until tender. Add fresh spinach and cook until wilted. Season with salt and pepper.",
          "Cut a pocket into each chicken breast and stuff with the mushroom-spinach mixture and shredded mozzarella cheese. Secure with toothpicks.",
          "Season the outside of the chicken breasts with salt and pepper.",
          "Bake in the preheated oven for 20-25 minutes until the chicken is cooked through and the cheese is melted and bubbly.",
          "Remove toothpicks before serving.",
          "Enjoy your Spinach and Mushroom Stuffed Chicken Breast!"
        ],
        vegan: false,
        vegetarian: false,
        country_of_origin: "American"
      },
      shopping_list: {
        items: [
          "4 boneless, skinless chicken breasts",
          "200g mushrooms",
          "2 cups fresh spinach",
          "1/2 cup shredded mozzarella cheese",
          "2 cloves garlic",
          "Olive oil",
          "Salt",
          "Pepper",
          "Toothpicks"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Vegetable Curry",
        description: "A hearty and aromatic Indian curry made with a variety of vegetables, spices, and coconut milk.",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/07/vegetable-curry-recipe-500x500.jpg",
        ingredients: [
          "2 cups mixed vegetables (e.g., potatoes, carrots, peas)",
          "1 onion, finely chopped",
          "2 tomatoes, chopped",
          "1/2 cup coconut milk",
          "2 tablespoons curry powder",
          "1 teaspoon cumin seeds",
          "2 cloves garlic, minced",
          "2 tablespoons vegetable oil",
          "Salt to taste",
          "Fresh cilantro leaves for garnish"
        ],
        nutrition: {
          calories: 220,
          protein: 5,
          carbohydrates: 25,
          fiber: 5,
          sugar: 5,
          fat: 12
        },
        preparation_time: 15,
        cooking_time: 25,
        method: [
          "In a large pan, heat vegetable oil and add cumin seeds. Allow them to sizzle.",
          "Add finely chopped onion and minced garlic. Sauté until onions turn translucent.",
          "Add mixed vegetables and tomatoes. Cook for a few minutes.",
          "Stir in curry powder and salt. Add coconut milk and simmer until vegetables are tender.",
          "Garnish with fresh cilantro leaves before serving.",
          "Enjoy your Vegetable Curry with rice or naan!"
        ],
        vegan: true,
        vegetarian: true,
        country_of_origin: "Indian"
      },
      shopping_list: {
        items: [
          "2 cups mixed vegetables",
          "1 onion",
          "2 tomatoes",
          "1/2 cup coconut milk",
          "2 tablespoons curry powder",
          "1 teaspoon cumin seeds",
          "2 cloves garlic",
          "Vegetable oil",
          "Salt",
          "Fresh cilantro leaves"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Grilled Salmon with Lemon-Dill Sauce",
        description: "Juicy grilled salmon fillets served with a zesty lemon and dill sauce.",
        image: "https://laughingspatula.com/wp-content/uploads/2020/07/salmon-heropic-500x500.jpg",
        ingredients: [
          "4 salmon fillets",
          "Juice and zest of 1 lemon",
          "2 tablespoons fresh dill, chopped",
          "2 tablespoons olive oil",
          "2 cloves garlic, minced",
          "Salt and pepper to taste"
        ],
        nutrition: {
          calories: 320,
          protein: 35,
          carbohydrates: 2,
          fiber: 0,
          sugar: 0,
          fat: 20
        },
        preparation_time: 10,
        cooking_time: 10,
        method: [
          "Preheat your grill to medium-high heat.",
          "In a small bowl, whisk together lemon juice, lemon zest, fresh dill, olive oil, minced garlic, salt, and pepper.",
          "Brush the salmon fillets with the lemon-dill mixture.",
          "Grill the salmon for about 4-5 minutes per side, or until it flakes easily with a fork.",
          "Serve with additional lemon-dill sauce on top.",
          "Enjoy your Grilled Salmon with Lemon-Dill Sauce!"
        ],
        vegan: false,
        vegetarian: false,
        country_of_origin: "American"
      },
      shopping_list: {
        items: [
          "4 salmon fillets",
          "1 lemon",
          "Fresh dill",
          "Olive oil",
          "2 cloves garlic",
          "Salt",
          "Pepper"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Spicy Thai Basil Chicken (Pad Krapow Gai)",
        description: "A Thai street food favorite with minced chicken, Thai basil, and fiery chili sauce.",
        image: "https://www.siftandsimmer.com/wp-content/uploads/2021/11/pad-krapow-gai-thai-basil-chicken3-500x500.jpg",
        ingredients: [
          "500g ground chicken",
          "2 cups Thai basil leaves",
          "3 cloves garlic, minced",
          "2-3 bird's eye chilies, chopped",
          "2 tablespoons oyster sauce",
          "1 tablespoon soy sauce",
          "1 teaspoon fish sauce",
          "1 teaspoon sugar",
          "2 tablespoons vegetable oil",
          "Jasmine rice for serving"
        ],
        nutrition: {
          calories: 300,
          protein: 20,
          carbohydrates: 10,
          fiber: 1,
          sugar: 2,
          fat: 18
        },
        preparation_time: 10,
        cooking_time: 10,
        method: [
          "In a wok or skillet, heat vegetable oil and sauté garlic and chilies until fragrant.",
          "Add ground chicken and cook until no longer pink.",
          "Stir in oyster sauce, soy sauce, fish sauce, and sugar.",
          "Add Thai basil leaves and cook until wilted.",
          "Serve over jasmine rice. Enjoy your Spicy Thai Basil Chicken!"
        ],
        vegan: false,
        vegetarian: false,
        country_of_origin: "Thai"
      },
      shopping_list: {
        items: [
          "500g ground chicken",
          "2 cups Thai basil leaves",
          "3 cloves garlic",
          "2-3 bird's eye chilies",
          "2 tablespoons oyster sauce",
          "1 tablespoon soy sauce",
          "1 teaspoon fish sauce",
          "1 teaspoon sugar",
          "2 tablespoons vegetable oil",
          "Jasmine rice"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Vegetarian Chilli",
        description: "A hearty and flavorful chilli loaded with beans, vegetables, and spices.",
        image: "https://wholefoodsoulfoodkitchen.com/wp-content/uploads/2022/08/vegetarian-chili-con-carne-recipe-1-500x500.jpg",
        ingredients: [
          "1 can (15 oz) kidney beans, drained and rinsed",
          "1 can (15 oz) black beans, drained and rinsed",
          "1 can (15 oz) pinto beans, drained and rinsed",
          "1 onion, chopped",
          "1 red bell pepper, chopped",
          "1 green bell pepper, chopped",
          "3 cloves garlic, minced",
          "1 can (28 oz) crushed tomatoes",
          "2 tablespoons Chilli powder",
          "1 tablespoon cumin",
          "1 teaspoon paprika",
          "Salt and pepper to taste",
          "Chopped cilantro and shredded cheese for garnish"
        ],
        nutrition: {
          calories: 250,
          protein: 12,
          carbohydrates: 45,
          fiber: 12,
          sugar: 6,
          fat: 2
        },
        preparation_time: 15,
        cooking_time: 30,
        method: [
          "In a large pot, sauté onion, garlic, and bell peppers until softened.",
          "Add beans, crushed tomatoes, Chilli powder, cumin, paprika, salt, and pepper.",
          "Simmer for 30 minutes, stirring occasionally.",
          "Serve with chopped cilantro and shredded cheese. Enjoy your Vegetarian Chilli!"
        ],
        vegan: true,
        vegetarian: true,
        country_of_origin: "American"
      },
      shopping_list: {
        items: [
          "1 can (15 oz) kidney beans",
          "1 can (15 oz) black beans",
          "1 can (15 oz) pinto beans",
          "1 onion",
          "1 red bell pepper",
          "1 green bell pepper",
          "3 cloves garlic",
          "1 can (28 oz) crushed tomatoes",
          "2 tablespoons chilli powder",
          "1 tablespoon cumin",
          "1 teaspoon paprika",
          "Salt",
          "Pepper",
          "Chopped cilantro",
          "Shredded cheese"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Shrimp Scampi Pasta",
        description: "A delightful Italian-inspired dish featuring succulent shrimp, garlic, white wine, and lemon over linguine pasta.",
        image: "https://simplyhomecooked.com/wp-content/uploads/2021/06/shrimp-scampi-pasta-n-500x500.jpg",
        ingredients: [
          "300g linguine pasta",
          "400g large shrimp, peeled and deveined",
          "4 cloves garlic, minced",
          "1/4 cup white wine",
          "Juice and zest of 1 lemon",
          "2 tablespoons unsalted butter",
          "2 tablespoons olive oil",
          "Fresh parsley for garnish",
          "Salt and black pepper to taste",
        ],
        nutrition: {
          calories: 400,
          protein: 25,
          carbohydrates: 45,
          fiber: 2,
          sugar: 2,
          fat: 15
        },
        preparation_time: 10,
        cooking_time: 15,
        method: [
          "Cook linguine pasta according to package instructions until al dente. Drain and set aside.",
          "In a skillet, heat olive oil and butter over medium-high heat. Add minced garlic and sauté until fragrant.",
          "Add shrimp and cook until pink, about 2-3 minutes per side. Remove shrimp from the skillet.",
          "Deglaze the skillet with white wine and simmer for a minute. Add lemon juice and zest, then return the shrimp to the skillet.",
          "Toss cooked pasta with the shrimp mixture and season with salt and black pepper.",
          "Garnish with fresh parsley and serve your Shrimp Scampi Pasta!"
        ],
        vegan: false,
        vegetarian: false,
        country_of_origin: "Italian"
      },
      shopping_list: {
        items: [
          "300g linguine pasta",
          "400g large shrimp",
          "4 cloves garlic",
          "White wine",
          "1 lemon",
          "Unsalted butter",
          "Olive oil",
          "Fresh parsley",
          "Salt",
          "Black pepper"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Quinoa and Black Bean Stuffed Peppers",
        description: "Colorful bell peppers stuffed with a nutritious mixture of quinoa, black beans, corn, and spices.",
        image: "https://www.thegardengrazer.com/wp-content/uploads/2012/03/bean-quinoa-stuffed-peppers-75-500x500.jpg",
        ingredients: [
          "4 large bell peppers, any color",
          "1 cup quinoa, rinsed and drained",
          "1 can (15 oz) black beans, drained and rinsed",
          "1 cup corn kernels (fresh or frozen)",
          "1 cup diced tomatoes",
          "1 teaspoon chili powder",
          "1 teaspoon cumin",
          "1/2 cup shredded cheddar cheese",
          "Fresh cilantro for garnish",
          "Salt and black pepper to taste",
        ],
        nutrition: {
          calories: 300,
          protein: 12,
          carbohydrates: 55,
          fiber: 10,
          sugar: 8,
          fat: 5
        },
        preparation_time: 20,
        cooking_time: 40,
        method: [
          "Preheat the oven to 350°F (175°C).",
          "Cut the tops off the bell peppers and remove the seeds and membranes.",
          "In a bowl, mix quinoa, black beans, corn, diced tomatoes, chili powder, cumin, salt, and black pepper.",
          "Stuff each bell pepper with the quinoa mixture and place them in a baking dish.",
          "Cover with foil and bake for 30-35 minutes until peppers are tender.",
          "Remove foil, sprinkle with shredded cheese, and bake for an additional 5 minutes until cheese is melted.",
          "Garnish with fresh cilantro and serve your Quinoa and Black Bean Stuffed Peppers!"
        ],
        vegan: false,
        vegetarian: true,
        country_of_origin: "American"
      },
      shopping_list: {
        items: [
          "4 large bell peppers",
          "1 cup quinoa",
          "1 can (15 oz) black beans",
          "1 cup corn kernels",
          "1 cup diced tomatoes",
          "Chili powder",
          "Cumin",
          "Shredded cheddar cheese",
          "Fresh cilantro",
          "Salt",
          "Black pepper"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Mushroom Risotto",
        description: "Creamy and comforting Italian risotto made with Arborio rice, mushrooms, white wine, and Parmesan cheese.",
        image: "https://www.savoryexperiments.com/wp-content/uploads/2023/02/Mushroom-Risotto-16-500x500.jpg",
        ingredients: [
          "1 1/2 cups Arborio rice",
          "200g mushrooms, sliced",
          "1 small onion, finely chopped",
          "3 cloves garlic, minced",
          "1/2 cup dry white wine",
          "4 cups vegetable broth, heated",
          "1/2 cup grated Parmesan cheese",
          "2 tablespoons butter",
          "2 tablespoons olive oil",
          "Fresh parsley for garnish",
          "Salt and black pepper to taste",
        ],
        nutrition: {
          calories: 400,
          protein: 10,
          carbohydrates: 50,
          fiber: 2,
          sugar: 2,
          fat: 15
        },
        preparation_time: 15,
        cooking_time: 30,
        method: [
          "In a large skillet, heat olive oil and butter over medium heat. Add chopped onion and garlic and sauté until softened.",
          "Add sliced mushrooms and cook until browned.",
          "Stir in Arborio rice and cook for a minute until rice is translucent at the edges.",
          "Pour in the white wine and stir until absorbed.",
          "Begin adding hot vegetable broth, one ladle at a time, stirring constantly until absorbed before adding more.",
          "Continue this process until the rice is creamy and cooked al dente (about 20-25 minutes).",
          "Stir in grated Parmesan cheese, season with salt and black pepper, and garnish with fresh parsley.",
          "Serve your Mushroom Risotto hot!"
        ],
        vegan: false,
        vegetarian: true,
        country_of_origin: "Italian"
      },
      shopping_list: {
        items: [
          "1 1/2 cups Arborio rice",
          "200g mushrooms",
          "1 small onion",
          "3 cloves garlic",
          "Dry white wine",
          "4 cups vegetable broth",
          "Grated Parmesan cheese",
          "Butter",
          "Olive oil",
          "Fresh parsley",
          "Salt",
          "Black pepper"
        ]
      }
    },    
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Chicken and Vegetable Stir-Fry",
        description: "A healthy stir-fry with tender chicken, colorful vegetables, and a savory stir-fry sauce.",
        image: "https://www.cookingclassy.com/wp-content/uploads/2019/12/chicken-stir-fry-1-500x500.jpg",
        ingredients: [
          "400g chicken breast, thinly sliced",
          "2 cups mixed vegetables (bell peppers, broccoli, carrots, snap peas)",
          "3 cloves garlic, minced",
          "1/4 cup soy sauce",
          "2 tablespoons oyster sauce",
          "1 tablespoon honey",
          "1 tablespoon cornstarch",
          "2 tablespoons vegetable oil",
          "Cooked rice for serving"
        ],
        nutrition: {
          calories: 350,
          protein: 25,
          carbohydrates: 30,
          fiber: 5,
          sugar: 10,
          fat: 15
        },
        preparation_time: 15,
        cooking_time: 15,
        method: [
          "In a bowl, whisk together soy sauce, oyster sauce, honey, and cornstarch to make the stir-fry sauce.",
          "In a wok or large skillet, heat vegetable oil over high heat. Add minced garlic and stir-fry until fragrant.",
          "Add sliced chicken and cook until no longer pink. Remove from the wok.",
          "Stir-fry mixed vegetables until tender-crisp.",
          "Return cooked chicken to the wok, pour in the stir-fry sauce, and toss to combine.",
          "Serve over cooked rice. Enjoy your Chicken and Vegetable Stir-Fry!"
        ],
        vegan: false,
        vegetarian: false,
        country_of_origin: "Chinese"
      },
      shopping_list: {
        items: [
          "400g chicken breast",
          "Mixed vegetables (bell peppers, broccoli, carrots, snap peas)",
          "3 cloves garlic",
          "Soy sauce",
          "Oyster sauce",
          "Honey",
          "Cornstarch",
          "Vegetable oil",
          "Cooked rice"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Veggie and Hummus Wrap",
        description: "A healthy and satisfying wrap filled with colorful vegetables, creamy hummus, and a sprinkle of feta cheese.",
        image: "https://www.foodiecrush.com/wp-content/uploads/2015/05/Hummus-Veggie-Wrap-foodiecrush.com-16-1-500x500.jpg",
        ingredients: [
          "4 whole wheat tortillas",
          "1 cup hummus",
          "2 cups mixed salad greens",
          "1 red bell pepper, thinly sliced",
          "1 cucumber, thinly sliced",
          "1 carrot, grated",
          "1/2 cup crumbled feta cheese",
          "Salt and black pepper to taste"
        ],
        nutrition: {
          calories: 300,
          protein: 10,
          carbohydrates: 40,
          fiber: 8,
          sugar: 5,
          fat: 10
        },
        preparation_time: 10,
        cooking_time: 0,
        method: [
          "Lay out each whole wheat tortilla and spread a generous layer of hummus onto each one.",
          "Evenly distribute mixed salad greens, red bell pepper slices, cucumber slices, and grated carrot over the hummus.",
          "Sprinkle crumbled feta cheese on top and season with salt and black pepper.",
          "Fold in the sides of each tortilla and roll up tightly. Slice in half if desired.",
          "Serve your Veggie and Hummus Wraps as a nutritious and quick meal!"
        ],
        vegan: false,
        vegetarian: true,
        country_of_origin: "American"
      },
      shopping_list: {
        items: [
          "4 whole wheat tortillas",
          "1 cup hummus",
          "Mixed salad greens",
          "1 red bell pepper",
          "1 cucumber",
          "1 carrot",
          "Crumbled feta cheese",
          "Salt",
          "Black pepper"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Tofu and Vegetable Stir-Fry",
        description: "A vegan-friendly stir-fry featuring crispy tofu, assorted vegetables, and a savory stir-fry sauce.",
        image: "https://www.funfoodfrolic.com/wp-content/uploads/2020/03/Tofu-Stir-Fry-Thumbnail-500x500.jpg",
        ingredients: [
          "400g extra-firm tofu, cubed and pressed",
          "2 cups mixed vegetables (broccoli, bell peppers, snow peas)",
          "3 cloves garlic, minced",
          "1/4 cup low-sodium soy sauce",
          "2 tablespoons hoisin sauce",
          "1 tablespoon maple syrup",
          "1 tablespoon cornstarch",
          "2 tablespoons vegetable oil",
          "Cooked brown rice for serving"
        ],
        nutrition: {
          calories: 300,
          protein: 15,
          carbohydrates: 35,
          fiber: 7,
          sugar: 8,
          fat: 12
        },
        preparation_time: 20,
        cooking_time: 20,
        method: [
          "In a bowl, whisk together soy sauce, hoisin sauce, maple syrup, and cornstarch to make the stir-fry sauce.",
          "In a wok or large skillet, heat vegetable oil over high heat. Add cubed tofu and cook until crispy. Remove from the wok.",
          "Stir-fry mixed vegetables and minced garlic until tender-crisp.",
          "Return cooked tofu to the wok, pour in the stir-fry sauce, and toss to combine.",
          "Serve over cooked brown rice. Enjoy your Tofu and Vegetable Stir-Fry!"
        ],
        vegan: true,
        vegetarian: true,
        country_of_origin: "Chinese"
      },
      shopping_list: {
        items: [
          "400g extra-firm tofu",
          "Mixed vegetables (broccoli, bell peppers, snow peas)",
          "3 cloves garlic",
          "Low-sodium soy sauce",
          "Hoisin sauce",
          "Maple syrup",
          "Cornstarch",
          "Vegetable oil",
          "Cooked brown rice"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Lentil and Vegetable Soup",
        description: "A hearty and nutritious soup made with green lentils, a variety of vegetables, and aromatic herbs and spices.",
        image: "https://desireerd.com/wp-content/uploads/2020/02/lentil-vegetable-soup-500x500.jpg",
        ingredients: [
          "1 cup green lentils, rinsed and drained",
          "1 onion, chopped",
          "2 carrots, chopped",
          "2 celery stalks, chopped",
          "2 cloves garlic, minced",
          "1 can (14 oz) diced tomatoes",
          "6 cups vegetable broth",
          "1 teaspoon ground cumin",
          "1 teaspoon smoked paprika",
          "Salt and black pepper to taste",
          "Fresh parsley for garnish"
        ],
        nutrition: {
          calories: 280,
          protein: 12,
          carbohydrates: 50,
          fiber: 12,
          sugar: 8,
          fat: 2
        },
        preparation_time: 15,
        cooking_time: 30,
        method: [
          "In a large pot, heat some vegetable broth over medium heat. Add chopped onion, carrots, and celery. Cook until softened.",
          "Stir in minced garlic, ground cumin, and smoked paprika. Cook for another minute.",
          "Add green lentils, diced tomatoes, and the remaining vegetable broth. Bring to a boil, then reduce heat and simmer for 20-25 minutes until lentils are tender.",
          "Season with salt and black pepper to taste.",
          "Garnish with fresh parsley and serve your Lentil and Vegetable Soup hot."
        ],
        vegan: true,
        vegetarian: true,
        country_of_origin: "International"
      },
      shopping_list: {
        items: [
          "1 cup green lentils",
          "1 onion",
          "2 carrots",
          "2 celery stalks",
          "2 cloves garlic",
          "1 can (14 oz) diced tomatoes",
          "Vegetable broth",
          "Ground cumin",
          "Smoked paprika",
          "Salt",
          "Black pepper",
          "Fresh parsley"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Tandoori Chicken",
        description: "A flavorful Indian dish with marinated chicken, yogurt, and a blend of aromatic spices, roasted to perfection.",
        image: "https://vikalinka.com/wp-content/uploads/2022/05/Tandoori-Chicken-Air-Fryer-13-Edit-500x500.jpg",
        ingredients: [
          "4 boneless, skinless chicken thighs",
          "1 cup plain yogurt",
          "2 tablespoons tandoori masala spice blend",
          "2 cloves garlic, minced",
          "1-inch piece of ginger, grated",
          "2 tablespoons lemon juice",
          "Salt and black pepper to taste",
          "Fresh cilantro for garnish",
          "Naan bread or rice for serving"
        ],
        nutrition: {
          calories: 300,
          protein: 30,
          carbohydrates: 10,
          fiber: 1,
          sugar: 5,
          fat: 15
        },
        preparation_time: 15,
        cooking_time: 20,
        method: [
          "In a bowl, combine yogurt, tandoori masala spice blend, minced garlic, grated ginger, lemon juice, salt, and black pepper.",
          "Add chicken thighs to the marinade and coat them thoroughly. Marinate for at least 30 minutes or longer if possible.",
          "Preheat your grill or oven to medium-high heat. Grill or roast chicken until cooked through, about 15-20 minutes.",
          "Garnish with fresh cilantro and serve your Tandoori Chicken with naan bread or rice."
        ],
        vegan: false,
        vegetarian: false,
        country_of_origin: "Indian"
      },
      shopping_list: {
        items: [
          "4 boneless, skinless chicken thighs",
          "Plain yogurt",
          "Tandoori masala spice blend",
          "2 cloves garlic",
          "1-inch piece of ginger",
          "Lemon juice",
          "Salt",
          "Black pepper",
          "Fresh cilantro",
          "Naan bread or rice"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Jerk Chicken",
        description: "A spicy and flavorful Jamaican classic featuring marinated chicken grilled to perfection with a jerk seasoning blend.",
        image: "https://www.chilipeppermadness.com/wp-content/uploads/2023/06/Jamaican-Jerk-Chicken-Recipe-SQ-500x500.jpg",
        ingredients: [
          "4 chicken leg quarters",
          "1/4 cup jerk seasoning blend",
          "2 tablespoons soy sauce",
          "2 tablespoons olive oil",
          "2 cloves garlic, minced",
          "1 lime, juiced",
          "Salt and black pepper to taste",
          "Coconut rice and beans for serving"
        ],
        nutrition: {
          calories: 400,
          protein: 30,
          carbohydrates: 15,
          fiber: 2,
          sugar: 2,
          fat: 25
        },
        preparation_time: 20,
        cooking_time: 30,
        method: [
          "In a bowl, combine jerk seasoning, soy sauce, olive oil, minced garlic, lime juice, salt, and black pepper.",
          "Rub the jerk marinade all over the chicken leg quarters. Marinate for at least 1 hour or overnight for the best flavor.",
          "Preheat your grill to medium-high heat. Grill chicken until it's cooked through and has a nice char, about 15-20 minutes per side.",
          "Serve Jamaican Jerk Chicken hot with coconut rice and beans."
        ],
        vegan: false,
        vegetarian: false,
        country_of_origin: "Jamaican"
      },
      shopping_list: {
        items: [
          "4 chicken leg quarters",
          "Jerk seasoning blend",
          "Soy sauce",
          "Olive oil",
          "2 cloves garlic",
          "1 lime",
          "Salt",
          "Black pepper",
          "Coconut rice and beans"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Chicken Tagine",
        description: "A fragrant and tender Moroccan stew made with chicken, preserved lemons, olives, and a blend of exotic spices.",
        image: "https://diethood.com/wp-content/uploads/2022/10/chicken-tagine-7-500x500.jpg",
        ingredients: [
          "4 chicken thighs, bone-in and skin-on",
          "2 preserved lemons, quartered",
          "1 cup green olives",
          "1 onion, chopped",
          "2 cloves garlic, minced",
          "2 teaspoons ground cumin",
          "2 teaspoons ground coriander",
          "1 teaspoon ground cinnamon",
          "1 teaspoon ground paprika",
          "Salt and black pepper to taste",
          "Fresh cilantro for garnish",
          "Cooked couscous for serving"
        ],
        nutrition: {
          calories: 380,
          protein: 30,
          carbohydrates: 15,
          fiber: 4,
          sugar: 2,
          fat: 20
        },
        preparation_time: 20,
        cooking_time: 45,
        method: [
          "In a tagine or large skillet, heat olive oil over medium-high heat. Brown chicken thighs on both sides and set aside.",
          "In the same skillet, sauté chopped onion and minced garlic until softened. Add ground cumin, coriander, cinnamon, and paprika, and cook until fragrant.",
          "Return the chicken to the skillet. Add preserved lemons and green olives. Season with salt and black pepper.",
          "Cover and simmer for 30-40 minutes or until the chicken is tender and cooked through.",
          "Serve Moroccan Chicken Tagine hot over cooked couscous, garnished with fresh cilantro."
        ],
        vegan: false,
        vegetarian: false,
        country_of_origin: "Moroccan"
      },
      shopping_list: {
        items: [
          "4 chicken thighs",
          "2 preserved lemons",
          "1 cup green olives",
          "1 onion",
          "2 cloves garlic",
          "Ground cumin",
          "Ground coriander",
          "Ground cinnamon",
          "Ground paprika",
          "Salt",
          "Black pepper",
          "Fresh cilantro",
          "Couscous"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Doro Wat",
        description: "A rich and spicy Ethiopian chicken stew made with berbere spice blend, served with injera flatbread.",
        image: "https://www.aspicyperspective.com/wp-content/uploads/2021/03/ethiopian-doro-wat-recipe-10-500x500.jpg",
        ingredients: [
          "4 chicken drumsticks and thighs",
          "2 onions, finely chopped",
          "4 cloves garlic, minced",
          "2 tablespoons berbere spice blend",
          "1/4 cup niter kibbeh (spiced butter) or clarified butter",
          "1 cup chicken broth",
          "2 hard-boiled eggs, peeled",
          "Salt and black pepper to taste",
          "Injera flatbread for serving"
        ],
        nutrition: {
          calories: 380,
          protein: 30,
          carbohydrates: 10,
          fiber: 2,
          sugar: 2,
          fat: 25
        },
        preparation_time: 20,
        cooking_time: 60,
        method: [
          "In a large pot, melt niter kibbeh or clarified butter over medium-high heat. Add finely chopped onions and minced garlic. Sauté until onions are caramelized.",
          "Add berbere spice blend and continue to cook for a few minutes until fragrant.",
          "Add chicken drumsticks and thighs to the pot, stirring to coat them with the spice mixture. Cook until chicken is browned.",
          "Pour in chicken broth and add hard-boiled eggs. Season with salt and black pepper.",
          "Cover and simmer for 40-45 minutes or until the chicken is tender and the sauce has thickened.",
          "Serve Ethiopian Doro Wat hot with injera flatbread."
        ],
        vegan: false,
        vegetarian: false,
        country_of_origin: "Ethiopian"
      },
      shopping_list: {
        items: [
          "4 chicken drumsticks and thighs",
          "2 onions",
          "4 cloves garlic",
          "Berbere spice blend",
          "Niter kibbeh (spiced butter) or clarified butter",
          "Chicken broth",
          "2 hard-boiled eggs",
          "Salt",
          "Black pepper",
          "Injera flatbread"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Chiles Rellenos",
        description: "A classic Mexican dish featuring roasted poblano peppers stuffed with cheese, then fried to a golden perfection.",
        image: "https://www.chilipeppermadness.com/wp-content/uploads/2020/10/Chile-Relleno-SQ-500x500.jpg",
        ingredients: [
          "4 large poblano peppers",
          "1 cup Monterey Jack cheese, shredded",
          "1 cup queso fresco, crumbled",
          "2 large eggs",
          "1/2 cup all-purpose flour",
          "1/2 cup milk",
          "1/2 teaspoon baking powder",
          "1/2 teaspoon salt",
          "Vegetable oil for frying",
          "Salsa verde for serving"
        ],
        nutrition: {
          calories: 320,
          protein: 15,
          carbohydrates: 15,
          fiber: 3,
          sugar: 2,
          fat: 20
        },
        preparation_time: 30,
        cooking_time: 30,
        method: [
          "Roast poblano peppers over an open flame or under the broiler until the skin is charred. Place them in a plastic bag to steam for 10 minutes. Peel off the skin, make a slit, and remove the seeds.",
          "Stuff each poblano pepper with a mixture of Monterey Jack cheese and queso fresco. Secure with toothpicks.",
          "In a bowl, beat egg whites until stiff peaks form. In another bowl, beat egg yolks until pale yellow. Gently fold egg yolks into the egg whites.",
          "In a separate bowl, combine flour, milk, baking powder, and salt to make the batter.",
          "Dip each stuffed poblano pepper in the batter and fry in hot vegetable oil until golden brown and crispy.",
          "Serve Mexican Chiles Rellenos hot with salsa verde."
        ],
        vegan: false,
        vegetarian: false,
        country_of_origin: "Mexican"
      },
      shopping_list: {
        items: [
          "4 large poblano peppers",
          "Monterey Jack cheese",
          "Queso fresco",
          "2 large eggs",
          "All-purpose flour",
          "Milk",
          "Baking powder",
          "Salt",
          "Vegetable oil",
          "Salsa verde"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Miso Soup",
        description: "A comforting and umami-rich Japanese soup made with miso paste, tofu, seaweed, and green onions.",
        image: "https://www.lowcarbingasian.com/wp-content/uploads/2019/06/Traditional-Japanese-Miso-Soup-LowCarbingAsian-Cover-500x500.jpg",
        ingredients: [
          "4 cups dashi (Japanese fish and seaweed stock)",
          "3 tablespoons miso paste",
          "1/2 cup silken tofu, cubed",
          "2 sheets nori seaweed, cut into strips",
          "2 green onions, thinly sliced",
          "1 tablespoon soy sauce (optional)",
          "1 teaspoon sesame oil (optional)",
          "1 teaspoon sesame seeds (optional)",
          "Cooked white rice for serving"
        ],
        nutrition: {
          calories: 70,
          protein: 4,
          carbohydrates: 7,
          fiber: 1,
          sugar: 1,
          fat: 3
        },
        preparation_time: 10,
        cooking_time: 10,
        method: [
          "In a pot, bring dashi stock to a gentle simmer.",
          "In a small bowl, whisk miso paste with a few tablespoons of hot dashi to form a smooth paste.",
          "Add the miso paste mixture back into the pot and stir to combine.",
          "Add cubed silken tofu and nori seaweed strips to the soup. Simmer for a few minutes until heated through.",
          "Stir in thinly sliced green onions and, if desired, soy sauce, sesame oil, and sesame seeds.",
          "Serve Japanese Miso Soup hot with a side of cooked white rice."
        ],
        vegan: false,
        vegetarian: true,
        country_of_origin: "Japanese"
      },
      shopping_list: {
        items: [
          "Dashi stock",
          "Miso paste",
          "Silken tofu",
          "Nori seaweed sheets",
          "2 green onions",
          "Soy sauce (optional)",
          "Sesame oil (optional)",
          "Sesame seeds (optional)",
          "Cooked white rice"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Butter Chicken (Murgh Makhani)",
        description: "A creamy and aromatic Indian curry made with tender chicken pieces simmered in a rich tomato and butter sauce.",
        image: "https://myfoodstory.com/wp-content/uploads/2020/04/restaurant-style-butter-chicken-masala-murgh-makhani-1-500x500.jpg",
        ingredients: [
          "1 lb boneless, skinless chicken thighs, cut into bite-sized pieces",
          "1/2 cup plain yogurt",
          "2 tablespoons ghee or unsalted butter",
          "1 onion, finely chopped",
          "3 cloves garlic, minced",
          "1-inch piece of ginger, minced",
          "1 1/2 teaspoons garam masala",
          "1 teaspoon ground turmeric",
          "1 teaspoon ground cumin",
          "1/2 teaspoon chili powder (adjust to taste)",
          "1 cup tomato puree",
          "1/2 cup heavy cream",
          "Salt and black pepper to taste",
          "Fresh cilantro for garnish",
          "Cooked basmati rice or naan bread for serving"
        ],
        nutrition: {
          calories: 350,
          protein: 25,
          carbohydrates: 10,
          fiber: 2,
          sugar: 4,
          fat: 25
        },
        preparation_time: 20,
        cooking_time: 30,
        method: [
          "Marinate chicken pieces in yogurt, garam masala, turmeric, cumin, and chili powder for at least 30 minutes.",
          "In a large skillet, heat ghee or butter over medium-high heat. Add finely chopped onions and sauté until golden brown.",
          "Add minced garlic and ginger, and cook for another 2 minutes until fragrant.",
          "Add marinated chicken and cook until no longer pink. Stir in tomato puree and simmer for 15-20 minutes.",
          "Stir in heavy cream and season with salt and black pepper. Simmer for an additional 5 minutes.",
          "Garnish with fresh cilantro and serve Indian Butter Chicken hot with basmati rice or naan bread."
        ],
        vegan: false,
        vegetarian: false,
        country_of_origin: "Indian"
      },
      shopping_list: {
        items: [
          "1 lb boneless, skinless chicken thighs",
          "Plain yogurt",
          "Ghee or unsalted butter",
          "1 onion",
          "3 cloves garlic",
          "Ginger",
          "Garam masala",
          "Ground turmeric",
          "Ground cumin",
          "Chili powder",
          "Tomato puree",
          "Heavy cream",
          "Salt",
          "Black pepper",
          "Fresh cilantro",
          "Basmati rice or naan bread"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Sweet and Sour Chicken",
        description: "A popular Chinese dish featuring crispy chicken pieces coated in a tangy sweet and sour sauce with colorful bell peppers and pineapple chunks.",
        image: "https://www.jocooks.com/wp-content/uploads/2014/03/sweet-and-sour-chicken-500x500.jpg",
        ingredients: [
          "1 lb boneless, skinless chicken breast, cut into bite-sized pieces",
          "1 cup bell peppers (red, green, or yellow), diced",
          "1 cup pineapple chunks (fresh or canned)",
          "1/2 cup all-purpose flour",
          "1/2 cup cornstarch",
          "1 teaspoon baking powder",
          "1/2 cup water",
          "1 egg",
          "1/4 cup vegetable oil for frying",
          "1/2 cup white sugar",
          "1/4 cup ketchup",
          "1/4 cup rice vinegar",
          "1 tablespoon soy sauce",
          "1 teaspoon ginger, minced",
          "1 teaspoon garlic, minced",
          "Cooked rice for serving"
        ],
        nutrition: {
          calories: 450,
          protein: 25,
          carbohydrates: 60,
          fiber: 2,
          sugar: 30,
          fat: 12
        },
        preparation_time: 20,
        cooking_time: 20,
        method: [
          "In a bowl, whisk together all-purpose flour, cornstarch, baking powder, water, and egg to make a batter.",
          "Dip chicken pieces in the batter, allowing excess to drip off, and fry in vegetable oil until golden brown and crispy. Drain on paper towels.",
          "In a separate saucepan, combine white sugar, ketchup, rice vinegar, soy sauce, minced ginger, and minced garlic. Bring to a simmer and cook until the sauce thickens.",
          "In a large skillet, stir-fry diced bell peppers and pineapple chunks until slightly softened.",
          "Add fried chicken pieces and pour the sweet and sour sauce over them. Stir to coat evenly.",
          "Serve Chinese Sweet and Sour Chicken hot over cooked rice."
        ],
        vegan: false,
        vegetarian: false,
        country_of_origin: "Chinese"
      },
      shopping_list: {
        items: [
          "1 lb boneless, skinless chicken breast",
          "Bell peppers (red, green, or yellow)",
          "Pineapple chunks",
          "All-purpose flour",
          "Cornstarch",
          "Baking powder",
          "Water",
          "1 egg",
          "Vegetable oil",
          "White sugar",
          "Ketchup",
          "Rice vinegar",
          "Soy sauce",
          "Ginger",
          "Garlic",
          "Cooked rice"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Chicken Teriyaki",
        description: "A Japanese favorite featuring tender chicken pieces glazed with a sweet and savory teriyaki sauce, served with steamed rice and vegetables.",
        image: "https://simply-delicious-food.com/wp-content/uploads/2019/10/Teriyaki-chicken-3-500x500.jpg",
        ingredients: [
          "2 boneless, skinless chicken breasts, cut into bite-sized pieces",
          "1/2 cup soy sauce",
          "1/4 cup mirin",
          "2 tablespoons sugar",
          "1 tablespoon sake (optional)",
          "1 clove garlic, minced",
          "1 teaspoon ginger, minced",
          "1 tablespoon vegetable oil",
          "Steamed white rice for serving",
          "Steamed broccoli and carrots for serving",
          "Toasted sesame seeds and chopped green onions for garnish"
        ],
        nutrition: {
          calories: 300,
          protein: 25,
          carbohydrates: 35,
          fiber: 1,
          sugar: 12,
          fat: 6
        },
        preparation_time: 15,
        cooking_time: 15,
        method: [
          "In a bowl, whisk together soy sauce, mirin, sugar, sake (if using), minced garlic, and minced ginger to make the teriyaki sauce.",
          "In a skillet, heat vegetable oil over medium-high heat. Add chicken pieces and cook until browned and cooked through.",
          "Pour the teriyaki sauce over the chicken and simmer until the sauce thickens and coats the chicken pieces.",
          "Serve Chicken Teriyaki hot over steamed white rice, accompanied by steamed broccoli and carrots.",
          "Garnish with toasted sesame seeds and chopped green onions."
        ],
        vegan: false,
        vegetarian: false,
        country_of_origin: "Japanese"
      },
      shopping_list: {
        items: [
          "Boneless, skinless chicken breasts",
          "Soy sauce",
          "Mirin",
          "Sugar",
          "Sake (optional)",
          "Garlic",
          "Ginger",
          "Vegetable oil",
          "White rice",
          "Broccoli",
          "Carrots",
          "Toasted sesame seeds",
          "Green onions"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Jollof Rice",
        description: "A flavorful West African one-pot rice dish cooked with tomatoes, peppers, onions, and a blend of spices, often served with chicken or vegetables.",
        image: "https://eatwellabi.com/wp-content/uploads/2022/11/Jollof-rice-16-500x500.jpg",
        ingredients: [
          "2 cups long-grain parboiled rice",
          "1/4 cup vegetable oil",
          "1 onion, finely chopped",
          "1 red bell pepper, diced",
          "1 green bell pepper, diced",
          "3 cloves garlic, minced",
          "1 teaspoon ground ginger",
          "1 teaspoon ground paprika",
          "1 teaspoon ground cayenne pepper (adjust to taste)",
          "1 teaspoon thyme",
          "2 cups tomato sauce",
          "1 cup chicken or vegetable broth",
          "Salt and black pepper to taste",
          "Cooked chicken, shrimp, or vegetables (optional, for serving)",
          "Fresh parsley or cilantro for garnish"
        ],
        nutrition: {
          calories: 300,
          protein: 6,
          carbohydrates: 50,
          fiber: 3,
          sugar: 5,
          fat: 8
        },
        preparation_time: 15,
        cooking_time: 40,
        method: [
          "Wash the rice thoroughly and set it aside to drain.",
          "In a large pot or Dutch oven, heat the vegetable oil over medium heat. Add the chopped onion and cook until it becomes translucent.",
          "Add the diced red and green bell peppers, minced garlic, ground ginger, ground paprika, cayenne pepper, and thyme. Sauté for a few minutes until fragrant.",
          "Stir in the tomato sauce and chicken or vegetable broth. Season with salt and black pepper. Allow the mixture to come to a simmer.",
          "Add the washed rice and stir well to combine. Reduce the heat to low, cover the pot, and let it simmer for about 25-30 minutes, or until the rice is cooked and the liquid is absorbed. If needed, you can add a little more broth or water during cooking.",
          "Optional: Serve Jollof Rice with cooked chicken, shrimp, or vegetables of your choice.",
          "Garnish with fresh parsley or cilantro before serving."
        ],
        vegan: false,
        vegetarian: true,
        country_of_origin: "African"
      },
      shopping_list: {
        items: [
          "Long-grain parboiled rice",
          "Vegetable oil",
          "Onion",
          "Red bell pepper",
          "Green bell pepper",
          "Garlic",
          "Ground ginger",
          "Ground paprika",
          "Ground cayenne pepper",
          "Thyme",
          "Tomato sauce",
          "Chicken or vegetable broth",
          "Salt",
          "Black pepper",
          "Cooked chicken, shrimp, or vegetables (optional)",
          "Fresh parsley or cilantro"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Jamaican Saltfish and Ackee",
        description: "A flavorful Jamaican dish featuring salted codfish and ackee fruit sautéed with aromatic spices and vegetables.",
        image: "https://thatgirlcookshealthy.com/wp-content/uploads/2019/02/jamaican-ackee-and-saltfish-image-500x500.jpg",
        ingredients: [
          "1 lb salted codfish (saltfish), soaked and flaked",
          "1 can (19 oz) ackee fruit, drained and rinsed",
          "1 small onion, chopped",
          "1/2 bell pepper (red or green), chopped",
          "2 cloves garlic, minced",
          "2 scallions, chopped",
          "1/4 Scotch bonnet pepper, minced (adjust to taste)",
          "1/2 teaspoon thyme leaves",
          "1/2 teaspoon black pepper",
          "2 tablespoons vegetable oil",
          "2 tomatoes, chopped",
          "Salt (if needed)",
          "Fresh cilantro or parsley for garnish"
        ],
        nutrition: {
          calories: 280,
          protein: 25,
          carbohydrates: 12,
          fiber: 4,
          sugar: 2,
          fat: 15
        },
        preparation_time: 30,
        cooking_time: 20,
        method: [
          "Start by soaking the salted codfish in cold water for several hours or overnight, changing the water a few times to remove excess salt. Once soaked, drain, and flake the codfish.",
          "In a large skillet, heat vegetable oil over medium heat. Add chopped onion, bell pepper, and garlic. Sauté until the vegetables are softened.",
          "Add the flaked saltfish to the skillet along with minced Scotch bonnet pepper, thyme, and black pepper. Cook for a few minutes, stirring occasionally.",
          "Gently fold in the drained ackee fruit and chopped tomatoes. Be careful not to break up the ackee too much; it should be tender and slightly firm.",
          "Cook for another 5-7 minutes until the flavors meld together and the ackee is heated through.",
          "Taste and adjust the seasoning, adding salt if necessary (though the saltfish usually provides enough saltiness).",
          "Garnish with fresh cilantro or parsley and serve your delicious Jamaican Saltfish and Ackee alongside rice, dumplings, or fried plantains."
        ],
        vegan: false,
        vegetarian: false,
        country_of_origin: "Jamaican"
      },
      shopping_list: {
        items: [
          "Salted codfish (saltfish)",
          "Canned ackee fruit",
          "Onion",
          "Bell pepper",
          "Garlic",
          "Scallions",
          "Scotch bonnet pepper",
          "Thyme leaves",
          "Black pepper",
          "Vegetable oil",
          "Tomatoes",
          "Salt (if needed)",
          "Fresh cilantro or parsley"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Tacos",
        description: "Tacos are a quintessential Mexican street food. They consist of soft or hard tortillas filled with a variety of ingredients such as grilled meats (beef, chicken, or pork), salsa, guacamole, onions, cilantro, and more.",
        image: "https://tornadoughalli.com/wp-content/uploads/2019/05/INSTANT-POT-STREET-TACOS-500x500.jpg",
        ingredients: [
          "Tortillas",
          "Grilled meats (e.g., beef, chicken, or pork)",
          "Salsa",
          "Guacamole",
          "Onions",
          "Cilantro"
        ],
        nutrition: {
          calories: 350,
          protein: 20,
          carbohydrates: 40,
          fiber: 5,
          sugar: 3,
          fat: 15
        },
        preparation_time: 30,
        cooking_time: 20,
        method: [
          "Grill or cook your choice of meats with spices and marinades.",
          "Warm tortillas and fill with grilled meats, salsa, guacamole, onions, and cilantro.",
          "Serve hot and enjoy your Mexican Tacos!"
        ],
        vegan: false,
        vegetarian: false,
        country_of_origin: "Mexican"
      },
      shopping_list: {
        items: [
          "Tortillas",
          "Grilled meats",
          "Salsa",
          "Guacamole",
          "Onions",
          "Cilantro"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Moussaka",
        description: "Moussaka is a traditional Greek dish consisting of layers of eggplant, ground meat (usually beef or lamb), and a creamy béchamel sauce. It's often baked to perfection.",
        image: "https://www.recipetineats.com/wp-content/uploads/2019/03/Greek-Moussaka_3-re-edited-SQ.jpg?w=500&h=500&crop=1",
        ingredients: [
          "2 eggplants, sliced into rounds",
          "1 lb ground beef or lamb",
          "1 onion, chopped",
          "2 cloves garlic, minced",
          "1 can (14 oz) crushed tomatoes",
          "1/2 cup red wine",
          "1 tsp dried oregano",
          "Salt and black pepper to taste",
          "3 cups béchamel sauce",
          "1/2 cup grated Parmesan cheese",
          "Olive oil for frying",
          "Fresh parsley for garnish"
        ],
        nutrition: {
          calories: 450,
          protein: 22,
          carbohydrates: 24,
          fiber: 6,
          sugar: 10,
          fat: 28
        },
        preparation_time: 30,
        cooking_time: 60,
        method: [
          "Sprinkle salt on eggplant slices and let them sit for 30 minutes to remove excess moisture. Rinse and pat dry.",
          "In a large skillet, heat olive oil over medium-high heat. Fry eggplant slices until lightly browned. Remove and set aside.",
          "In the same skillet, add chopped onion and garlic. Sauté until fragrant.",
          "Add ground meat and cook until browned. Drain excess fat if needed.",
          "Stir in crushed tomatoes, red wine, dried oregano, salt, and black pepper. Simmer for 10 minutes.",
          "Preheat the oven to 350°F (175°C).",
          "In a baking dish, layer fried eggplant slices and the meat sauce. Repeat as needed.",
          "Pour béchamel sauce evenly over the top layer and sprinkle with Parmesan cheese.",
          "Bake for 30-40 minutes until golden brown and bubbly.",
          "Garnish with fresh parsley before serving."
        ],
        vegan: false,
        vegetarian: false,
        country_of_origin: "Greek"
      },
      shopping_list: {
        items: [
          "Eggplants",
          "Ground beef or lamb",
          "Onion",
          "Garlic",
          "Crushed tomatoes",
          "Red wine",
          "Dried oregano",
          "Salt",
          "Black pepper",
          "Béchamel sauce",
          "Parmesan cheese",
          "Olive oil",
          "Fresh parsley"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Peking Duck",
        description: "Peking Duck is a famous Chinese dish known for its crispy, aromatic duck skin and tender meat. It's typically served with thin pancakes, hoisin sauce, and thinly sliced scallions.",
        image: "https://www.kitchensanctuary.com/wp-content/uploads/2016/02/pulled-duck-square-500x500.jpg",
        ingredients: [
          "1 Peking duck (about 5-6 pounds)",
          "2 tbsp maltose or honey",
          "1 tbsp vinegar",
          "1 cup hot water",
          "1/2 cup boiling water",
          "Thin pancakes (store-bought or homemade)",
          "Hoisin sauce",
          "Thinly sliced scallions"
        ],
        nutrition: {
          calories: 280,
          protein: 25,
          carbohydrates: 12,
          fiber: 4,
          sugar: 2,
          fat: 15
        },
        preparation_time: 45,
        cooking_time: 120,
        method: [
          "Clean and rinse the duck, then pat it dry. Hang the duck for several hours to air-dry the skin.",
          "Preheat the oven to 350°F (175°C).",
          "Mix maltose or honey with hot water and vinegar to create a glaze.",
          "Pour boiling water over the duck to tighten the skin, then brush the glaze over the duck's skin and cavity.",
          "Roast the duck in the preheated oven for about 2 hours or until the skin is crispy and golden brown.",
          "Remove the duck from the oven and let it rest for a few minutes.",
          "Slice the duck into thin pieces and serve with thin pancakes, hoisin sauce, and sliced scallions."
        ],
        vegan: false,
        vegetarian: false,
        country_of_origin: "Chinese"
      },
      shopping_list: {
        items: [
          "Peking duck",
          "Maltose or honey",
          "Vinegar",
          "Hot water",
          "Boiling water",
          "Thin pancakes",
          "Hoisin sauce",
          "Scallions"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Mexican Street Corn (Elote)",
        description: "Grilled corn on the cob smothered in a creamy mixture of mayonnaise, cotija cheese, chili powder, and lime juice.",
        image: "https://princesspinkygirl.com/wp-content/uploads/2020/06/Mexican-Street-Corn-square-500x500.jpg",
        ingredients: [
          "4 ears of corn, husked",
          "1/2 cup mayonnaise",
          "1/2 cup crumbled cotija cheese",
          "1 teaspoon chili powder (adjust to taste)",
          "Juice of 2 limes",
          "Fresh cilantro leaves for garnish"
        ],
        nutrition: {
          calories: 280,
          protein: 7,
          carbohydrates: 23,
          fiber: 3,
          sugar: 5,
          fat: 18
        },
        preparation_time: 10,
        cooking_time: 15,
        method: [
          "Preheat a grill to medium-high heat.",
          "Grill the corn, turning occasionally, until it's cooked and has some charred spots, about 10-15 minutes.",
          "In a bowl, combine mayonnaise, crumbled cotija cheese, chili powder, and lime juice.",
          "Spread the mayonnaise mixture evenly over the grilled corn.",
          "Garnish with fresh cilantro leaves.",
          "Serve your Mexican Street Corn (Elote) as a delicious side dish or snack.",
          "Enjoy!"
        ],
        vegan: false,
        vegetarian: true,
        country_of_origin: "Mexican"
      },
      shopping_list: {
        items: [
          "Ears of corn",
          "Mayonnaise",
          "Cotija cheese",
          "Chili powder",
          "Limes",
          "Fresh cilantro leaves"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Scottish Haggis",
        description: "Haggis is a traditional Scottish dish made from minced sheep's heart, liver, and lungs, mixed with oats, onions, and spices, encased in a sheep's stomach.",
        image: "https://www.carolinescooking.com/wp-content/uploads/2015/01/haggis-featured-pic-sq-500x500.jpg",
        ingredients: [
          "1 sheep's stomach (or synthetic casing)",
          "1 sheep's heart",
          "1 sheep's liver",
          "1 sheep's lung",
          "3/4 cup steel-cut oats",
          "1 large onion, finely chopped",
          "1/2 cup suet (beef or lamb fat)",
          "1 teaspoon salt",
          "1/2 teaspoon black pepper",
          "1/2 teaspoon ground nutmeg",
          "1/2 teaspoon ground mace",
          "1/4 teaspoon cayenne pepper",
          "Water, as needed"
        ],
        nutrition: {
          calories: 320,
          protein: 18,
          carbohydrates: 30,
          fiber: 4,
          sugar: 1,
          fat: 15
        },
        preparation_time: 60,
        cooking_time: 180,
        method: [
          "Clean the sheep's stomach thoroughly, then soak it in salted water overnight. Rinse well.",
          "In a large pot, simmer the sheep's heart, liver, and lungs in water for about 1 hour until tender. Remove and mince.",
          "In a separate pot, cook the steel-cut oats according to package instructions.",
          "Combine the minced meats, cooked oats, chopped onion, suet, and spices. Mix well, adding water as needed to create a moist mixture.",
          "Stuff the mixture into the cleaned sheep's stomach (or synthetic casing) and sew the openings closed.",
          "Place the haggis in a large pot of simmering water. Simmer for 2-3 hours, keeping the casing fully submerged.",
          "Slice and serve your Scottish Haggis with neeps (mashed turnips) and tatties (mashed potatoes)."
        ],
        vegan: false,
        vegetarian: false,
        country_of_origin: "Scottish"
      },
      shopping_list: {
        items: [
          "Sheep's stomach or synthetic casing",
          "Sheep's heart",
          "Sheep's liver",
          "Sheep's lung",
          "Steel-cut oats",
          "Onion",
          "Suet (beef or lamb fat)",
          "Salt",
          "Black pepper",
          "Ground nutmeg",
          "Ground mace",
          "Cayenne pepper",
          "Water"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Cullen Skink",
        description: "Cullen Skink is a traditional Scottish soup made with smoked haddock, potatoes, onions, and cream. It's a hearty and comforting dish.",
        image: "https://www.therealmealdeal.com/wp-content/uploads/2022/11/cullen-skink-recipe-with-leeks-1-500x500.jpg",
        ingredients: [
          "8 oz smoked haddock fillets",
          "2 cups potatoes, diced",
          "1 onion, finely chopped",
          "1 cup milk",
          "1 cup heavy cream",
          "2 tablespoons butter",
          "Salt and black pepper to taste",
          "Chopped fresh parsley for garnish"
        ],
        nutrition: {
          calories: 250,
          protein: 14,
          carbohydrates: 19,
          fiber: 2,
          sugar: 4,
          fat: 14
        },
        preparation_time: 20,
        cooking_time: 30,
        method: [
          "In a large pot, melt the butter over medium heat. Add the chopped onion and sauté until translucent.",
          "Add diced potatoes and cook for a few minutes, stirring occasionally.",
          "Pour in enough water to cover the potatoes and bring to a boil. Simmer until the potatoes are tender.",
          "In a separate pan, poach the smoked haddock fillets in milk until they are just cooked. Remove the fish and flake it.",
          "Add the flaked haddock, milk, and heavy cream to the potato mixture. Heat gently without boiling.",
          "Season with salt and black pepper to taste.",
          "Garnish your Cullen Skink with chopped fresh parsley and serve."
        ],
        vegan: false,
        vegetarian: false,
        country_of_origin: "Scottish"
      },
      shopping_list: {
        items: [
          "Smoked haddock fillets",
          "Potatoes",
          "Onion",
          "Milk",
          "Heavy cream",
          "Butter",
          "Salt",
          "Black pepper",
          "Chopped fresh parsley"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Vegan Lentil Soup",
        description: "A hearty and nutritious vegan lentil soup packed with vegetables and spices.",
        image: "https://brokebankvegan.com/wp-content/uploads/2023/08/Vegan-Lentil-Soup-Feature-500x500.jpg",
        ingredients: [
          "1 cup dried green lentils",
          "1 onion, chopped",
          "2 carrots, diced",
          "2 celery stalks, chopped",
          "3 cloves garlic, minced",
          "6 cups vegetable broth",
          "1 can (14 oz) diced tomatoes",
          "2 teaspoons ground cumin",
          "1 teaspoon smoked paprika",
          "Salt and pepper to taste",
          "Fresh parsley for garnish"
        ],
        nutrition: {
          calories: 250,
          protein: 12,
          carbohydrates: 45,
          fiber: 10,
          sugar: 6,
          fat: 2
        },
        preparation_time: 15,
        cooking_time: 30,
        method: [
          "In a large pot, sauté onion, garlic, carrots, and celery until softened.",
          "Add lentils, vegetable broth, diced tomatoes, and spices. Simmer for 20 minutes.",
          "Season with salt and pepper to taste.",
          "Garnish with fresh parsley and serve your Vegan Lentil Soup!"
        ],
        vegan: true,
        vegetarian: true,
        country_of_origin: "International"
      },
      shopping_list: {
        items: [
          "1 cup dried green lentils",
          "1 onion",
          "2 carrots",
          "2 celery stalks",
          "3 cloves garlic",
          "6 cups vegetable broth",
          "1 can (14 oz) diced tomatoes",
          "Ground cumin",
          "Smoked paprika",
          "Salt",
          "Pepper",
          "Fresh parsley"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Chickpea Curry",
        description: "A spicy and flavorful vegan curry made with chickpeas and aromatic spices.",
        image: "https://gatheringdreams.com/wp-content/uploads/2022/11/Vegan-Chickpea-Curry-main-square-500x500.jpg",
        ingredients: [
          "2 cans (15 oz) chickpeas, drained and rinsed",
          "1 onion, chopped",
          "3 cloves garlic, minced",
          "1 can (14 oz) diced tomatoes",
          "1 can (14 oz) coconut milk",
          "2 tablespoons curry powder",
          "1 teaspoon cumin",
          "1 teaspoon turmeric",
          "Salt and pepper to taste",
          "Fresh cilantro for garnish"
        ],
        nutrition: {
          calories: 300,
          protein: 10,
          carbohydrates: 35,
          fiber: 8,
          sugar: 6,
          fat: 15
        },
        preparation_time: 15,
        cooking_time: 25,
        method: [
          "In a large skillet, sauté onion and garlic until softened.",
          "Add chickpeas, diced tomatoes, coconut milk, and spices. Simmer for 20 minutes.",
          "Season with salt and pepper to taste.",
          "Garnish with fresh cilantro and serve your Vegan Chickpea Curry!"
        ],
        vegan: true,
        vegetarian: true,
        country_of_origin: "Indian"
      },
      shopping_list: {
        items: [
          "2 cans (15 oz) chickpeas",
          "1 onion",
          "3 cloves garlic",
          "1 can (14 oz) diced tomatoes",
          "1 can (14 oz) coconut milk",
          "Curry powder",
          "Cumin",
          "Turmeric",
          "Salt",
          "Pepper",
          "Fresh cilantro"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Chickpea Salad",
        description: "A refreshing and protein-packed vegan salad with chickpeas, vegetables, and a zesty dressing.",
        image: "https://thehiddenveggies.com/wp-content/uploads/2017/03/chickpea-salad-sq-1-500x500.jpg",
        ingredients: [
          "2 cans (15 oz) chickpeas, drained and rinsed",
          "1 cucumber, diced",
          "1 red bell pepper, diced",
          "1/2 red onion, finely chopped",
          "1 cup cherry tomatoes, halved",
          "1/4 cup fresh parsley, chopped",
          "1/4 cup fresh mint, chopped",
          "Juice of 2 lemons",
          "3 tablespoons olive oil",
          "Salt and pepper to taste"
        ],
        nutrition: {
          calories: 300,
          protein: 10,
          carbohydrates: 45,
          fiber: 12,
          sugar: 6,
          fat: 10
        },
        preparation_time: 15,
        cooking_time: 0,
        method: [
          "In a large bowl, combine chickpeas, cucumber, red bell pepper, red onion, cherry tomatoes, parsley, and mint.",
          "In a small bowl, whisk together lemon juice, olive oil, salt, and pepper to make the dressing.",
          "Drizzle the dressing over the salad and toss to combine.",
          "Chill in the refrigerator for about 30 minutes before serving.",
          "Enjoy your Vegan Chickpea Salad!"
        ],
        vegan: true,
        vegetarian: true,
        country_of_origin: "Mediterranean"
      },
      shopping_list: {
        items: [
          "2 cans (15 oz) chickpeas",
          "1 cucumber",
          "1 red bell pepper",
          "1/2 red onion",
          "1 cup cherry tomatoes",
          "Fresh parsley",
          "Fresh mint",
          "Lemons",
          "Olive oil",
          "Salt",
          "Pepper"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Quinoa Bowl",
        description: "A wholesome and colorful vegan quinoa bowl with roasted vegetables and avocado dressing.",
        image: "https://www.thissavoryvegan.com/wp-content/uploads/2020/03/roasted-chickpea-quinoa-bowls-sesame-ginger-dressing-3-500x500.jpg",
        ingredients: [
          "1 cup quinoa, cooked",
          "1 sweet potato, diced",
          "1 red bell pepper, sliced",
          "1 zucchini, sliced",
          "1 cup cherry tomatoes, halved",
          "1 cup baby spinach",
          "1 avocado, sliced",
          "Juice of 1 lime",
          "2 tablespoons olive oil",
          "Salt and pepper to taste"
        ],
        nutrition: {
          calories: 350,
          protein: 8,
          carbohydrates: 50,
          fiber: 10,
          sugar: 8,
          fat: 14
        },
        preparation_time: 15,
        cooking_time: 25,
        method: [
          "Preheat the oven to 425°F (220°C).",
          "Toss sweet potato, red bell pepper, and zucchini with olive oil, salt, and pepper on a baking sheet. Roast for 20-25 minutes.",
          "In a bowl, combine cooked quinoa, roasted vegetables, cherry tomatoes, and baby spinach.",
          "In a separate bowl, whisk together lime juice and olive oil to make the dressing.",
          "Drizzle the dressing over the quinoa bowl, top with sliced avocado, and serve.",
          "Enjoy your Vegan Quinoa Bowl!"
        ],
        vegan: true,
        vegetarian: true,
        country_of_origin: "International"
      },
      shopping_list: {
        items: [
          "1 cup quinoa",
          "1 sweet potato",
          "1 red bell pepper",
          "1 zucchini",
          "1 cup cherry tomatoes",
          "1 cup baby spinach",
          "1 avocado",
          "Lime",
          "Olive oil",
          "Salt",
          "Pepper"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Black Bean Tacos",
        description: "Delicious and protein-packed vegan tacos with seasoned black beans and fresh toppings.",
        image: "https://www.cookingclassy.com/wp-content/uploads/2017/02/black-bean-tacos-11-500x500.jpg",
        ingredients: [
          "2 cans (15 oz) black beans, drained and rinsed",
          "1 onion, chopped",
          "2 cloves garlic, minced",
          "1 tablespoon chili powder",
          "1 teaspoon cumin",
          "1/2 teaspoon paprika",
          "1/4 teaspoon cayenne pepper (optional)",
          "Salt and pepper to taste",
          "8 small corn tortillas",
          "Sliced avocado, salsa, and fresh cilantro for topping"
        ],
        nutrition: {
          calories: 300,
          protein: 10,
          carbohydrates: 50,
          fiber: 12,
          sugar: 2,
          fat: 6
        },
        preparation_time: 15,
        cooking_time: 15,
        method: [
          "In a skillet, sauté onion and garlic until softened.",
          "Add black beans, chili powder, cumin, paprika, cayenne pepper (if using), salt, and pepper. Cook for 5-7 minutes.",
          "Warm corn tortillas in a dry skillet or microwave.",
          "Fill tortillas with the black bean mixture, top with sliced avocado, salsa, and fresh cilantro.",
          "Serve your delicious Vegan Black Bean Tacos!"
        ],
        vegan: true,
        vegetarian: true,
        country_of_origin: "Mexican"
      },
      shopping_list: {
        items: [
          "2 cans (15 oz) black beans",
          "1 onion",
          "2 cloves garlic",
          "Chili powder",
          "Cumin",
          "Paprika",
          "Cayenne pepper (optional)",
          "Salt",
          "Pepper",
          "8 small corn tortillas",
          "Sliced avocado",
          "Salsa",
          "Fresh cilantro"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Vegan Thai Red Curry",
        description: "A spicy and aromatic vegan Thai red curry with tofu and assorted vegetables.",
        image: "https://www.cookwithmanali.com/wp-content/uploads/2017/01/Vegetarian-Thai-Red-Curry-500x500.jpg",
        ingredients: [
          "1 block tofu, cubed",
          "1 red bell pepper, sliced",
          "1 yellow bell pepper, sliced",
          "1 zucchini, sliced",
          "1 carrot, thinly sliced",
          "1 can (14 oz) coconut milk",
          "2 tablespoons red curry paste",
          "1 tablespoon soy sauce",
          "1 tablespoon brown sugar",
          "Juice of 1 lime",
          "Fresh basil leaves for garnish"
        ],
        nutrition: {
          calories: 320,
          protein: 12,
          carbohydrates: 20,
          fiber: 6,
          sugar: 8,
          fat: 20
        },
        preparation_time: 15,
        cooking_time: 20,
        method: [
          "In a large skillet, sauté tofu until golden brown. Set aside.",
          "In the same skillet, sauté bell peppers, zucchini, and carrot until tender-crisp.",
          "Add coconut milk, red curry paste, soy sauce, brown sugar, and lime juice. Stir and simmer for 10 minutes.",
          "Return tofu to the skillet and simmer for an additional 5 minutes.",
          "Garnish with fresh basil leaves and serve your Vegan Thai Red Curry!"
        ],
        vegan: true,
        vegetarian: true,
        country_of_origin: "Thai"
      },
      shopping_list: {
        items: [
          "1 block tofu",
          "1 red bell pepper",
          "1 yellow bell pepper",
          "1 zucchini",
          "1 carrot",
          "1 can (14 oz) coconut milk",
          "Red curry paste",
          "Soy sauce",
          "Brown sugar",
          "Lime",
          "Fresh basil leaves"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Mediterranean Salad",
        description: "A refreshing and colorful vegan salad with a mix of Mediterranean flavors and fresh ingredients.",
        image: "https://dishingouthealth.com/wp-content/uploads/2022/04/MediterraneanChickpeaSalad_Square-500x500.jpg",
        ingredients: [
          "2 cups cooked quinoa",
          "1 cup cherry tomatoes, halved",
          "1 cucumber, diced",
          "1/2 red onion, finely chopped",
          "1/2 cup Kalamata olives, pitted",
          "1/4 cup fresh parsley, chopped",
          "1/4 cup fresh mint, chopped",
          "Juice of 2 lemons",
          "3 tablespoons extra-virgin olive oil",
          "Salt and pepper to taste"
        ],
        nutrition: {
          calories: 280,
          protein: 6,
          carbohydrates: 35,
          fiber: 8,
          sugar: 3,
          fat: 14
        },
        preparation_time: 15,
        cooking_time: 0,
        method: [
          "In a large bowl, combine cooked quinoa, cherry tomatoes, cucumber, red onion, Kalamata olives, parsley, and mint.",
          "In a small bowl, whisk together lemon juice, extra-virgin olive oil, salt, and pepper to make the dressing.",
          "Drizzle the dressing over the salad and toss to combine.",
          "Chill in the refrigerator for about 30 minutes before serving.",
          "Enjoy your Vegan Mediterranean Salad!"
        ],
        vegan: true,
        vegetarian: true,
        country_of_origin: "Mediterranean"
      },
      shopping_list: {
        items: [
          "2 cups cooked quinoa",
          "1 cup cherry tomatoes",
          "1 cucumber",
          "1/2 red onion",
          "Kalamata olives",
          "Fresh parsley",
          "Fresh mint",
          "Lemons",
          "Extra-virgin olive oil",
          "Salt",
          "Pepper"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Thai Noodle Soup",
        description: "A comforting and flavorful vegan Thai noodle soup with vegetables and aromatic spices.",
        image: "https://www.veggieinspired.com/wp-content/uploads/2022/01/red-curry-thai-noodle-soup-featured-500x500.jpg",
        ingredients: [
          "8 oz rice noodles",
          "1 can (14 oz) coconut milk",
          "4 cups vegetable broth",
          "1 red bell pepper, sliced",
          "1 zucchini, sliced",
          "1 carrot, thinly sliced",
          "2 cloves garlic, minced",
          "2 tablespoons red curry paste",
          "1 tablespoon soy sauce",
          "Juice of 1 lime",
          "Fresh cilantro leaves for garnish"
        ],
        nutrition: {
          calories: 350,
          protein: 6,
          carbohydrates: 60,
          fiber: 4,
          sugar: 6,
          fat: 12
        },
        preparation_time: 15,
        cooking_time: 20,
        method: [
          "Cook rice noodles according to package instructions, drain, and set aside.",
          "In a large pot, combine coconut milk, vegetable broth, red bell pepper, zucchini, carrot, garlic, red curry paste, and soy sauce.",
          "Simmer for 15 minutes until the vegetables are tender.",
          "Stir in lime juice and cooked rice noodles.",
          "Serve your Vegan Thai Noodle Soup garnished with fresh cilantro leaves."
        ],
        vegan: true,
        vegetarian: true,
        country_of_origin: "Thai"
      },
      shopping_list: {
        items: [
          "8 oz rice noodles",
          "1 can (14 oz) coconut milk",
          "4 cups vegetable broth",
          "1 red bell pepper",
          "1 zucchini",
          "1 carrot",
          "2 cloves garlic",
          "Red curry paste",
          "Soy sauce",
          "Lime",
          "Fresh cilantro leaves"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Spinach and Mushroom Stuffed Peppers",
        description: "Delicious and nutritious vegan stuffed peppers with a flavorful spinach and mushroom filling.",
        image: "https://elavegan.com/wp-content/uploads/2018/03/vegan-stuffed-peppers-gluten-free-healthy-recipe-500x500.jpg",
        ingredients: [
          "4 large bell peppers",
          "1 cup quinoa, cooked",
          "2 cups fresh spinach, chopped",
          "8 oz mushrooms, finely chopped",
          "1 onion, chopped",
          "2 cloves garlic, minced",
          "1 can (14 oz) diced tomatoes",
          "1 teaspoon Italian seasoning",
          "Salt and pepper to taste"
        ],
        nutrition: {
          calories: 250,
          protein: 8,
          carbohydrates: 45,
          fiber: 10,
          sugar: 8,
          fat: 2
        },
        preparation_time: 15,
        cooking_time: 40,
        method: [
          "Preheat the oven to 375°F (190°C).",
          "Cut the tops off the bell peppers and remove the seeds and membranes.",
          "In a skillet, sauté onion and garlic until softened.",
          "Add mushrooms and cook until they release their moisture.",
          "Stir in spinach, cooked quinoa, diced tomatoes, Italian seasoning, salt, and pepper.",
          "Stuff the bell peppers with the filling and place them in a baking dish.",
          "Cover with foil and bake for 30 minutes. Remove foil and bake for an additional 10 minutes.",
          "Serve your Vegan Spinach and Mushroom Stuffed Peppers!"
        ],
        vegan: true,
        vegetarian: true,
        country_of_origin: "International"
      },
      shopping_list: {
        items: [
          "4 large bell peppers",
          "1 cup quinoa",
          "2 cups fresh spinach",
          "8 oz mushrooms",
          "1 onion",
          "2 cloves garlic",
          "1 can (14 oz) diced tomatoes",
          "Italian seasoning",
          "Salt",
          "Pepper"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Cauliflower Curry",
        description: "A creamy and aromatic vegan cauliflower curry with a blend of spices and coconut milk.",
        image: "https://lovingitvegan.com/wp-content/uploads/2021/08/Vegan-Cauliflower-Curry-17-500x500.jpg",
        ingredients: [
          "1 head cauliflower, cut into florets",
          "1 can (14 oz) chickpeas, drained and rinsed",
          "1 onion, chopped",
          "2 cloves garlic, minced",
          "1 can (14 oz) diced tomatoes",
          "1 can (14 oz) coconut milk",
          "2 tablespoons curry powder",
          "1 teaspoon cumin",
          "1 teaspoon turmeric",
          "Salt and pepper to taste",
          "Fresh cilantro for garnish"
        ],
        nutrition: {
          calories: 280,
          protein: 8,
          carbohydrates: 30,
          fiber: 8,
          sugar: 8,
          fat: 14
        },
        preparation_time: 15,
        cooking_time: 25,
        method: [
          "In a large skillet, sauté onion and garlic until softened.",
          "Add cauliflower florets and chickpeas, and cook for a few minutes.",
          "Stir in diced tomatoes, coconut milk, curry powder, cumin, turmeric, salt, and pepper.",
          "Simmer for 20 minutes until the cauliflower is tender and the sauce is thickened.",
          "Garnish with fresh cilantro and serve your Vegan Cauliflower Curry!"
        ],
        vegan: true,
        vegetarian: true,
        country_of_origin: "Indian"
      },
      shopping_list: {
        items: [
          "1 head cauliflower",
          "1 can (14 oz) chickpeas",
          "1 onion",
          "2 cloves garlic",
          "1 can (14 oz) diced tomatoes",
          "1 can (14 oz) coconut milk",
          "Curry powder",
          "Cumin",
          "Turmeric",
          "Salt",
          "Pepper",
          "Fresh cilantro"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Tofu Stir-Fry",
        description: "A colorful and nutritious vegetarian stir-fry with tofu, broccoli, bell peppers, and a flavorful sauce.",
        image: "https://jessicainthekitchen.com/wp-content/uploads/2022/07/Vegan-Stir-Fry01030-500x500.jpg",
        ingredients: [
          "1 block tofu, cubed",
          "2 cups broccoli florets",
          "1 red bell pepper, sliced",
          "1 yellow bell pepper, sliced",
          "1 carrot, thinly sliced",
          "1 cup snap peas",
          "2 cloves garlic, minced",
          "1/4 cup soy sauce",
          "2 tablespoons hoisin sauce",
          "1 tablespoon sesame oil",
          "1 tablespoon cornstarch",
          "1 tablespoon vegetable oil",
          "Cooked rice for serving"
        ],
        nutrition: {
          calories: 350,
          protein: 14,
          carbohydrates: 40,
          fiber: 8,
          sugar: 8,
          fat: 16
        },
        preparation_time: 15,
        cooking_time: 20,
        method: [
          "In a bowl, whisk together soy sauce, hoisin sauce, sesame oil, and cornstarch to make the sauce.",
          "In a large skillet, heat vegetable oil and sauté tofu until golden brown.",
          "Add garlic, broccoli, bell peppers, carrot, and snap peas. Stir-fry until tender-crisp.",
          "Pour sauce over the stir-fry, toss to coat, and cook for a few more minutes.",
          "Serve over cooked rice and enjoy your Vegetarian Tofu Stir-Fry!"
        ],
        vegan: false,
        vegetarian: true,
        country_of_origin: "Asian"
      },
      shopping_list: {
        items: [
          "1 block tofu",
          "2 cups broccoli florets",
          "1 red bell pepper",
          "1 yellow bell pepper",
          "1 carrot",
          "1 cup snap peas",
          "2 cloves garlic",
          "Soy sauce",
          "Hoisin sauce",
          "Sesame oil",
          "Cornstarch",
          "Vegetable oil",
          "Cooked rice"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Spinach and Mushroom Quesadillas",
        description: "Cheesy and satisfying vegetarian quesadillas filled with spinach, mushrooms, and peppers.",
        image: "https://www.budgetbytes.com/wp-content/uploads/2022/02/Spinach-and-Mushroom-Quesadillas-stack-500x500.jpg",
        ingredients: [
          "4 large flour tortillas",
          "2 cups fresh spinach",
          "8 oz mushrooms, sliced",
          "1 red bell pepper, sliced",
          "1 onion, thinly sliced",
          "2 cups shredded cheddar cheese",
          "1 tablespoon olive oil",
          "Salt and pepper to taste",
          "Sour cream and salsa for dipping"
        ],
        nutrition: {
          calories: 350,
          protein: 12,
          carbohydrates: 30,
          fiber: 4,
          sugar: 4,
          fat: 22
        },
        preparation_time: 15,
        cooking_time: 20,
        method: [
          "In a skillet, heat olive oil and sauté mushrooms, red bell pepper, and onion until softened.",
          "Add fresh spinach and cook until wilted. Season with salt and pepper.",
          "Place a tortilla in the skillet and sprinkle with shredded cheddar cheese.",
          "Add the vegetable mixture on top and cover with another tortilla.",
          "Cook until the tortilla is golden brown, then flip and cook the other side.",
          "Repeat with the remaining tortillas and filling.",
          "Slice into wedges and serve your Vegetarian Spinach and Mushroom Quesadillas with sour cream and salsa."
        ],
        vegan: false,
        vegetarian: true,
        country_of_origin: "Mexican"
      },
      shopping_list: {
        items: [
          "4 large flour tortillas",
          "Fresh spinach",
          "8 oz mushrooms",
          "1 red bell pepper",
          "1 onion",
          "Shredded cheddar cheese",
          "Olive oil",
          "Salt",
          "Pepper",
          "Sour cream",
          "Salsa"
        ]
      }
    },
    {
      meal: {
        favourited: false,
        in_shopping_bag: false,
        name: "Fettuccine Alfredo",
        description: "A creamy and indulgent vegetarian pasta dish with fettuccine noodles and a rich Alfredo sauce.",
        image: "https://makeitdairyfree.com/wp-content/uploads/2021/10/vegan-fettuccine-alfredo-1-500x500.jpg",
        ingredients: [
          "8 oz fettuccine pasta",
          "2 cups heavy cream",
          "1/2 cup unsalted butter",
          "1 cup grated Parmesan cheese",
          "2 cloves garlic, minced",
          "Salt and pepper to taste",
          "Fresh parsley for garnish"
        ],
        nutrition: {
          calories: 600,
          protein: 12,
          carbohydrates: 40,
          fiber: 2,
          sugar: 2,
          fat: 45
        },
        preparation_time: 15,
        cooking_time: 20,
        method: [
          "Cook fettuccine pasta according to package instructions, drain, and set aside.",
          "In a large skillet, melt unsalted butter and sauté minced garlic until fragrant.",
          "Add heavy cream and bring to a simmer. Cook for 5 minutes, stirring occasionally.",
          "Stir in grated Parmesan cheese until the sauce is creamy and smooth.",
          "Season with salt and pepper to taste.",
          "Add cooked fettuccine to the sauce, toss to coat, and cook for a few more minutes.",
          "Garnish with fresh parsley and serve your Vegetarian Fettuccine Alfredo!"
        ],
        vegan: false,
        vegetarian: true,
        country_of_origin: "Italian"
      },
      shopping_list: {
        items: [
          "8 oz fettuccine pasta",
          "Heavy cream",
          "Unsalted butter",
          "Grated Parmesan cheese",
          "2 cloves garlic",
          "Salt",
          "Pepper",
          "Fresh parsley"
        ]
      }
    }
  ]
);

db.tips.insertMany([
    {
    kitchen_tips: {
        title: "How to Boil the Perfect Egg",
        description: "Follow these steps for a perfectly boiled egg every time.",
        image: "https://www.bowlofdelicious.com/wp-content/uploads/2015/11/Easy-to-Peel-Hard-Boiled-Eggs-square-500x500.jpg",
        steps: [
          "Place eggs in a single layer in a saucepan or pot.",
          "Cover the eggs with water, ensuring they are fully submerged.",
          "Place the saucepan on the stove over medium-high heat and bring the water to a gentle boil.",
          "Once boiling, reduce the heat to low and simmer for 9-12 minutes for hard-boiled eggs or 4-6 minutes for soft-boiled eggs.",
          "Carefully transfer the eggs to a bowl of ice water to cool rapidly and stop the cooking process.",
          "Peel and enjoy your perfectly boiled eggs!"
        ]
      }
    },
    {
      kitchen_tips: {
        title: "Effective Food Storage",
        description: "Maximize freshness and minimize waste with proper food storage techniques.",
        image: "https://www.oikku.co.uk/cdn/shop/products/il_fullxfull.3869964207_5acy_530x@2x.jpg?v=1652528004",
        steps: [
          "Label and date leftovers to track their freshness and avoid consuming spoiled food.",
          "Store raw meats separately from other foods to prevent cross-contamination.",
          "Use airtight containers to keep dry goods like flour and sugar free from pests and maintain quality.",
          "Keep your refrigerator organized with designated areas for fruits, vegetables, dairy, and meats.",
          "Rotate your pantry items regularly to use older items first and minimize food waste.",
          "Consider investing in a vacuum sealer for extended freshness of certain food items."
        ]
      }
    },
    {
      kitchen_tips: {
        title: "Quick and Easy Meal Prep",
        description: "Streamline your cooking process with these efficient meal prep tips.",
        image: "https://beatthebudget.com/wp-content/uploads/2021/02/Low-Carb-Mexican-Meal-Prep-2-500x500.jpg",
        steps: [
          "Plan your meals for the week to streamline grocery shopping and preparation.",
          "Chop and prep vegetables in advance for quicker assembly when cooking.",
          "Invest in quality storage containers to keep prepped ingredients fresh in the refrigerator.",
          "Cook in batches and freeze individual portions for convenient, ready-to-eat meals.",
          "Create a meal prep routine to save time and make cooking a more enjoyable experience.",
          "Explore one-pot or sheet pan recipes for simplified and efficient meal preparation."
        ]
      }
    },
    {
      kitchen_tips: {
        title: "Baking Perfection",
        description: "Achieve baking success with these essential tips.",
        image: "https://www.jkcart.com/uploads/blogs/blogImg_848577199296854169315713226253.png",
        steps: [
          "Measure ingredients accurately using proper measuring cups and spoons.",
          "Bring ingredients like eggs and butter to room temperature before baking for better incorporation.",
          "Preheat your oven to the correct temperature before placing items inside.",
          "Rotate baking sheets or pans halfway through the baking time for even cooking.",
          "Invest in an oven thermometer to ensure your oven's temperature is accurate for precise baking.",
          "Experiment with parchment paper for easy cleanup and to prevent sticking when baking."
        ]
      }
    },
    {
      kitchen_tips: {
        title: "Flavorful Grilling Tips",
        description: "Enhance your grilling skills with these flavor-boosting tips.",
        image: "https://beefsteakclubwines.com/wp-content/uploads/2021/04/AdobeStock_188534601-500x500-1.jpeg",
        steps: [
          "Marinate meats before grilling to add flavor and tenderize the meat.",
          "Oil the grill grates before cooking to prevent sticking and facilitate easy flipping.",
          "Let meat rest after grilling to allow juices to redistribute, ensuring a juicy and flavorful result.",
          "Experiment with wood chips or charcoal to add unique smoky flavors to your grilled dishes.",
          "Invest in a meat thermometer to achieve perfect doneness without overcooking.",
          "Explore different grilling techniques such as indirect grilling for more control over cooking temperatures."
        ]
      }
    },
    {
      kitchen_tips: {
        title: "Essential Stir-Frying Tips",
        description: "Master the art of stir-frying with these essential tips.",
        image: "https://www.cookingforkeeps.com/wp-content/uploads/2021/05/Healthy-Vegetable-Stir-Fry-Web-10-500x500.jpg",
        steps: [
          "Prep all ingredients before starting to ensure a smooth and quick stir-frying process.",
          "Use a wok or a wide, shallow pan to allow even cooking and efficient stirring.",
          "Cook ingredients with higher moisture content first to prevent overcrowding and promote proper browning.",
          "Maintain high heat throughout the stir-frying process for a crisp texture and quick cooking.",
          "Add sauces and seasonings towards the end of cooking to avoid sogginess and preserve flavors.",
          "Practice continuous stirring and tossing for even distribution of heat and flavors in your stir-fry."
        ]
      }
    },
    {
      kitchen_tips: {
        title: "Tips for Fresh Salad",
        description: "Enjoy a crisp and delicious salad with these simple tips.",
        image: "https://www.thehungrybites.com/wp-content/uploads/2023/08/tossed-salad-for-a-crowd-featured-500x500.jpg",
        steps: [
          "Wash and thoroughly dry your greens to ensure a crisp base for your salad.",
          "Add a variety of colorful vegetables to enhance both flavor and nutrition.",
          "Consider adding fresh herbs for an extra burst of flavor.",
          "Prepare homemade dressings using quality olive oil and vinegar for a personalized touch.",
          "Toss your salad just before serving to maintain its freshness and prevent wilting.",
          "Experiment with different toppings like nuts, seeds, or cheese for added texture and taste."
        ]
      }
    },
    {
      kitchen_tips: {
        title: "Perfect Cup of Coffee",
        description: "Brew the perfect cup of coffee with these expert tips.",
        image: "https://thefamilycookbook.co.uk/wp-content/uploads/2023/11/A-guide-to-the-best-coffee-in-Europe-2023-4.png",
        steps: [
          "Start with freshly ground coffee beans for the best flavor.",
          "Use clean and filtered water to avoid any unwanted tastes in your coffee.",
          "Measure your coffee grounds and water accurately for a balanced brew.",
          "Preheat your coffee equipment to ensure the optimal brewing temperature.",
          "Experiment with different brewing methods to find your preferred coffee profile.",
          "Enjoy your coffee promptly after brewing for the freshest taste."
        ]
      }
    },
    {
      kitchen_tips: {
        title: "Homemade Pizza Perfection",
        description: "Create the perfect homemade pizza with these essential tips.",
        image: "https://lifestyleofafoodie.com/wp-content/uploads/2020/08/NO-FAIL-Pizza-dough-for-Two-small-batch-14-of-45-500x500.jpg",
        steps: [
          "Start with quality pizza dough for a delicious and chewy crust.",
          "Use flavorful and high-quality pizza sauce to enhance the overall taste.",
          "Select fresh and varied toppings to add color, texture, and taste.",
          "Preheat your oven and pizza stone for a crispy crust and even cooking.",
          "Experiment with different cheeses to find your favorite pizza combination.",
          "Allow your pizza to rest for a few minutes before slicing to set the toppings and prevent a soggy crust."
        ]
      }
    },
    {
      kitchen_tips: {
        title: "Golden Pancake Rules",
        description: "Follow these rules for golden and fluffy pancakes every time.",
        image: "https://www.graceandgoodeats.com/wp-content/uploads/2015/01/best-ever-homemade-pancakes-500x500.jpg",
        steps: [
          "Preheat your griddle or pan to the right temperature for even cooking.",
          "Use a well-balanced pancake batter with the right ratio of wet and dry ingredients.",
          "Allow the batter to rest for a few minutes to achieve fluffier pancakes.",
          "Cook pancakes on one side until bubbles form, then flip for a golden finish.",
          "Avoid pressing down on pancakes with the spatula to maintain their fluffiness.",
          "Serve immediately with your favorite toppings for a delightful breakfast treat."
        ]
      }
    },
    {
      kitchen_tips: {
        title: "Smart Slow Cooking",
        description: "Master the art of slow cooking with these smart tips.",
        image: "https://www.effortlessfoodie.com/wp-content/uploads/2022/02/slow-cooker-beef-curry-11-500x500.jpg",
        steps: [
          "Choose the right cuts of meat for tender and flavorful slow-cooked dishes.",
          "Layer ingredients properly to ensure even cooking and distribution of flavors.",
          "Avoid lifting the lid during cooking to retain heat and moisture.",
          "Experiment with different herbs and spices for rich and complex flavors.",
          "Plan ahead for longer cooking times to fully enjoy the benefits of slow cooking.",
          "Use the low setting for extended cooking times and the high setting for quicker meals."
        ]
      }
    },
    {
      kitchen_tips: {
        title: "How to Clean a Dishwasher",
        description: "Keep your dishwasher running smoothly with these cleaning tips.",
        image: "https://miro.medium.com/v2/resize:fit:500/1*BKh5I4EePPUJ_fjSDhsuPw.jpeg",
        steps: [
          "Remove any loose debris or food particles from the dishwasher's filter.",
          "Place a dishwasher-safe cup filled with white vinegar on the top rack and run a hot water cycle.",
          "Sprinkle baking soda on the bottom of the dishwasher and run another short hot water cycle.",
          "Wipe down the interior and exterior of the dishwasher with a damp cloth.",
          "Regularly clean the door gasket and seals to prevent mold and odors.",
          "Perform a monthly cleaning routine to maintain optimal dishwasher performance."
        ]
      }
    },
    {
      kitchen_tips: {
        title: "How to Clean Pots and Pans",
        description: "Restore your cookware's shine with these effective cleaning techniques.",
        image: "https://www.carpetcleaninglondonagency.co.uk/wp-content/uploads/2013/09/Cookware_Catagory.jpg",
        steps: [
          "Allow pots and pans to cool before cleaning to avoid burns and warping.",
          "Soak cookware in warm, soapy water to loosen stubborn food residues.",
          "Use a non-abrasive sponge or soft brush to scrub pots and pans gently.",
          "For burnt-on stains, create a paste with baking soda and water, apply, and let sit before scrubbing.",
          "Avoid using harsh abrasive cleaners that can damage the surface of non-stick cookware.",
          "Regularly season cast iron pans to maintain their non-stick properties and prevent rust."
        ]
      }
    },
    {
      kitchen_tips: {
        title: "How to Clean Chicken Before Cooking",
        description: "Ensure safe and clean chicken preparation with these steps.",
        image: "https://www.loavesanddishes.net/wp-content/uploads/2021/07/Pressure-Cooker-Chicken-500x500.jpg",
        steps: [
          "Remove the chicken from its packaging and place it on a clean cutting board.",
          "Pat the chicken dry with paper towels to remove excess moisture.",
          "Trim any visible fat and remove giblets if present.",
          "Rinse the chicken under cold running water, inside and out.",
          "Use a solution of one tablespoon of vinegar per one liter of water for an additional rinse.",
          "Thoroughly wash hands, utensils, and surfaces that come in contact with raw chicken to prevent cross-contamination."
        ]
      }
    }
]);