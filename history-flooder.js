javascript:(function() {
    const searchQueries = [ 
      "pizza", "hamburger", "sushi", "pasta", "steak", "tacos", "burrito", "ramen", "fried chicken", "sandwich",
      "salad", "soup", "pancake", "waffle", "donut", "ice cream", "cake", "cookie", "pie", "cheeseburger",
      "fries", "hot dog", "chicken wings", "lasagna", "spaghetti", "gnocchi", "curry", "noodles", "samosa",
      "biryani", "tikka masala", "pad thai", "pho", "spring rolls", "dim sum", "sashimi", "tempura", "maki",
      "poke bowl", "schnitzel", "bratwurst", "paella", "tortilla", "enchiladas", "quesadilla", "chili",
      "falafel", "hummus", "shawarma", "gyro", "bagel", "croissant", "pretzel", "ramen", "soba", "udon",
      "bibimbap", "kimchi", "sushi roll", "poke", "ceviche", "arepa", "empanadas", "chimichanga", "tamales",
      "gumbo", "jambalaya", "goulash", "kabob", "borscht", "pierogi", "fondue", "raclette", "pho", "pad see ew",
      "sukiyaki", "yakitori", "onigiri", "tiramisu", "cannoli", "macaron", "crepe", "souffle", "custard", 
      "gelato", "sorbet", "churros", "flan", "trifle", "mochi", "poutine", "hush puppies", "cornbread", "coleslaw",
      "beignets", "biscuits and gravy"
    ]; // search queries edit if u want
  
    function openTab(query) {
      return new Promise(resolve => {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(searchUrl, "_blank");
        resolve();
      });
    }
  
    async function openTabsConcurrently(queries) {
      const promises = queries.map(query => openTab(query));
      await Promise.all(promises);
    }
  
    function openTabsRepeatedly(queries, numTabs, interval) {
      const intervalId = setInterval(() => {
        if (queries.length === 0) {
          clearInterval(intervalId);
          alert("Done.");
        } else {
          openTabsConcurrently(queries.splice(0, numTabs));
        }
      }, interval);
    }
  
    openTabsRepeatedly(searchQueries.slice(), 3, 5000); // # tabs will be opened every # milliseconds
  })();
  