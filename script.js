// console.log("is our script file working?");

//loading Airtable library, call it "Airtable";
var Airtable = require("airtable");
//console.log(Airtable);

//use airtable library, connect to base using API key 
var base = new Airtable({ apiKey: "keyWPHNJNanT4412M" }).base(
    "appskgkVVYqiVGUis"
  );


  //get collection base, select all records 
  //specify functions that will receive data 
  base("coffee").select({}).eachPage(gotPageOfCoffee, gotAllCoffee);


//empty array to hold data
  var coffee = [];

  //callback function that receives data 
  function gotPageOfCoffee(records, fetchNextPage) {
    console.log("gotPageOfCoffee()");
    // add the records from this page to our albums array
    coffee.push(...records);
    // request more pages
    fetchNextPage();
  }

// call back function that is called when all pages are loaded
function gotAllCoffee(err) {
    console.log("gotAllCoffee()");
  
    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading coffee");
      console.error(err);
      return;
    }
  
    // call functions to log and show the albums
    consoleLogCoffee();
    showCoffee();
  }

// just loop through the albums and console.log them
function consoleLogCoffee() {
    console.log("consoleLogCoffee()");
    coffee.forEach((coffee) => {
      console.log("Coffee:", coffee);
    });
  }
  
// loop through Airtable data, and create elements 
function showCoffee() {
    console.log("showCoffee()");
    coffee.forEach((coffee) => {
      
       

        //create a new div container for coffee 
        var coffeeContainer = document.createElement("div");
        coffeeContainer.classList.add("coffee-container");
        document.querySelector(".container").append(coffeeContainer);
        
      
        //create a new div for coffee description box on hover
        var coffeeDescription = document.createElement("div");
        coffeeDescription.classList.add("coffee-description");
        document.querySelector(".coffee-container").append(coffeeDescription);

        //add coffee shop names to container 
        var shopTitle = document.createElement("h3");
        shopTitle.classList.add("shop-title");
        shopTitle.innerText = coffee.fields.name;
        coffeeDescription.append(shopTitle);

        //add address to container
        var addressLocation = document.createElement("h2");
        addressLocation.classList.add("address-location");
        addressLocation.innerText = coffee.fields.location;
        coffeeDescription.append(addressLocation);

        //add store image to container
        var storeImage = document.createElement("img");
        storeImage.classList.add("store-image");
        storeImage.src = coffee.fields.store_image[0].url;
        coffeeDescription.append(storeImage);
        


        // add event listener for when click on coffee container, image and address will display and disappear 
        // coffeeContainer.addEventListener("mouseover", function(){
        //   coffeeDescription.style.display = "block";
        // })

        // coffeeContainer.addEventListener("mouseout", function(){
        //   coffeeDescription.style.display = "none";
        // })

        //
         coffeeContainer.addEventListener("mouseover", function(){
          coffeeDescription.style.display = "block";
        })

        coffeeContainer.addEventListener("mouseout", function(){
          coffeeDescription.style.display = "none";
        })



        // coffeeContainer.addEventListener("click", function pageRedirect(){
        //   window.location.replace("secondary_oxalis.html");
        //   setTimeout("pageRedirect()", 1000);
        // })

        coffeeContainer.addEventListener("click",function(){
          coffeeContainer.style.background = "bisque";
        })
      
        coffeeContainer.addEventListener("mouseover", function(){
          coffeeContainer.style.background = "#A8947C";
        })

        coffeeContainer.addEventListener("mouseout", function(){
          coffeeContainer.style.background = "transparent";
          
        })

        // document.querySelector(".subnavbtn").addEventListener("click", function(){
        //   document.querySelector(".subnav-content").display = "flex";
        // })

        //detail page for SALENTO (uptown)

        coffeeContainer.addEventListener("click", function createPage(){
          if (coffeeContainer.classList.contains("salento")){
          window.location.replace("detailpages/salento.html");
          
          } 
      })

      //detail page for OXALIS (brooklyn)
      coffeeContainer.addEventListener("click", function createPage(){
        if(coffeeContainer.classList.contains("oxalis")){
            window.location.replace("detailpages/secondary_oxalis.html");
        }
    })

      //detail page for DOUBLE DUTCH (uptown)
      coffeeContainer.addEventListener("click", function createPage(){
        if(coffeeContainer.classList.contains("double_dutch")){
            window.location.replace("detailpages/secondary_doubledutch.html");
        }
    })

     //detail page for BLACK PRESS (uptown)
     coffeeContainer.addEventListener("click", function createPage(){
      if(coffeeContainer.classList.contains("black_press")){
          window.location.replace("detailpages/blackpress.html");
      }
  })

   //detail page for LE REVEIL (uptown)
   coffeeContainer.addEventListener("click", function createPage(){
    if(coffeeContainer.classList.contains("le_reveil")){
        window.location.replace("detailpages/lereveil.html");
    }
})

 //detail page for THE CHIPPED CUP (uptown)
   coffeeContainer.addEventListener("click", function createPage(){
    if(coffeeContainer.classList.contains("chipped_cup")){
        window.location.replace("detailpages/chippedcup.html");
    }
})

 //detail page for DANIELS (uptown)
 coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("daniels")){
      window.location.replace("detailpages/daniels.html");
  }
})

 //detail page for MANHATTANVILLE (uptown)
 coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("manhattanville")){
      window.location.replace("detailpages/manhattanville.html");
  }
})

//detail page for MANHATTANVILLE (uptown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("semicolon")){
      window.location.replace("detailpages/semicolon.html");
  }
})

//detail page for BOX KITE (uptown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("box_kite")){
      window.location.replace("detailpages/boxkite.html");
  }
})

//detail page for FOREVER (uptown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("forever")){
      window.location.replace("detailpages/forever.html");
  }
})

//detail page for SOLID STATE (uptown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("solid_state")){
      window.location.replace("detailpages/solidstate.html");
  }
})

//detail page for EL BARRISTA (uptown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("el_barrista")){
      window.location.replace("detailpages/elbarrista.html");
  }
})

//detail page for CLIPPER (bronx)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("clipper")){
      window.location.replace("detailpages/clipper.html");
  }
})

//detail page for MAIN ST (st island)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("main_st")){
      window.location.replace("detailpages/mainst.html");
  }
})

//detail page for BIBBLE & SIP(midtown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("bibble")){
      window.location.replace("detailpages/bibble.html");
  }
})

//detail page for OLD COUNTRY (midtown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("old_country")){
      window.location.replace("detailpages/oldcountry.html");
  }
})

//detail page for MAMAS (midtown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("mamas")){
      window.location.replace("detailpages/mamas.html");
  }
})


//detail page for CULTURE (midtown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("culture")){
      window.location.replace("detailpages/culture.html");
  }
})

//detail page for ZIBETTO (midtown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("zibetto")){
      window.location.replace("detailpages/zibetto.html");
  }
})

//detail page for REX (midtown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("rex")){
      window.location.replace("detailpages/rex.html");
  }
})

//detail page for FOR FIVE (midtown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("for_five")){
      window.location.replace("detailpages/forfive.html");
  }
})

//detail page for CAFE SHIKI (downtown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("shiki")){
      window.location.replace("detailpages/shiki.html");
  }
})

//detail page for RALPH'S(downtown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("ralphs")){
      window.location.replace("detailpages/ralphs.html");
  }
})

//detail page for SALTWATER (downtown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("saltwater")){
      window.location.replace("detailpages/saltwater.html");
  }
})

//detail page for LAUGHING MAN (downtown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("laughing_man")){
      window.location.replace("detailpages/laughingman.html");
  }
})

//detail page for STUMPTOWN (downtown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("stumptown")){
      window.location.replace("detailpages/stumptown.html");
  }
})

//detail page for BLACKSTONE (downtown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("blackstone")){
      window.location.replace("detailpages/blackstone.html");
  }
})

//detail page for WAYPOINT (downtown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("waypoint")){
      window.location.replace("detailpages/waypoint.html");
  }
})

//detail page for KONA (downtown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("kona")){
      window.location.replace("detailpages/kona.html");
  }
})

//detail page for AMAZON (downtown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("amazon")){
      window.location.replace("detailpages/amazon.html");
  }
})

//detail page for DREAMERS (downtown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("dreamers")){
      window.location.replace("detailpages/dreamers.html");
  }
})
      
//detail page for NOW OR NEVER (downtown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("now_or_never")){
      window.location.replace("detailpages/nowornever.html");
  }
})

//detail page for EVERYMAN (downtown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("everyman")){
      window.location.replace("detailpages/everyman.html");
  }
})
      
//detail page for URBAN BACKYARD (downtown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("urban_backyard")){
      window.location.replace("detailpages/urbanbackyard.html");
  }
})
        //detail page for THE BEAN (downtown)
coffeeContainer.addEventListener("click", function createPage(){
  if(coffeeContainer.classList.contains("bean")){
      window.location.replace("detailpages/thebean.html");
  }
})

        //detail page for 787 (downtown)
        coffeeContainer.addEventListener("click", function createPage(){
          if(coffeeContainer.classList.contains("seveneightseven")){
              window.location.replace("detailpages/seveneightseven.html");
          }
        })


          //detail page for LA COLOMBE (downtown)
          coffeeContainer.addEventListener("click", function createPage(){
            if(coffeeContainer.classList.contains("la_colombe")){
                window.location.replace("detailpages/colombe.html");
            }
          })

           //detail page for PATORO (downtown)
           coffeeContainer.addEventListener("click", function createPage(){
            if(coffeeContainer.classList.contains("patoro")){
                window.location.replace("detailpages/patoro.html");
            }
          })

          //detail page for GRUMPY (downtown)
          coffeeContainer.addEventListener("click", function createPage(){
            if(coffeeContainer.classList.contains("grumpy")){
                window.location.replace("detailpages/grumpy.html");
            }
          })

           //detail page for BLUE BOTTLE (downtown)
           coffeeContainer.addEventListener("click", function createPage(){
            if(coffeeContainer.classList.contains("blue_bottle")){
                window.location.replace("detailpages/bluebottle.html");
            }
          })
         
           //detail page for LUDLOW (downtown)
           coffeeContainer.addEventListener("click", function createPage(){
            if(coffeeContainer.classList.contains("ludlow")){
                window.location.replace("detailpages/ludlow.html");
            }
          })

           //detail page for YOURS  (downtown)
           coffeeContainer.addEventListener("click", function createPage(){
            if(coffeeContainer.classList.contains("yours")){
                window.location.replace("detailpages/yours.html");
            }
          })

          //detail page for MAMAN  (downtown)
          coffeeContainer.addEventListener("click", function createPage(){
            if(coffeeContainer.classList.contains("maman")){
                window.location.replace("detailpages/maman.html");
            }
          })

          //detail page for coffee project west  (downtown)
          coffeeContainer.addEventListener("click", function createPage(){
            if(coffeeContainer.classList.contains("coffee_project_east")){
                window.location.replace("detailpages/cpnyeast.html");
            }
          })

            //detail page for coffee project east  (downtown)
            coffeeContainer.addEventListener("click", function createPage(){
              if(coffeeContainer.classList.contains("coffee_project_west")){
                  window.location.replace("detailpages/cpnywest.html");
              }
            })

             //detail page for elsewhere (downtown)
             coffeeContainer.addEventListener("click", function createPage(){
              if(coffeeContainer.classList.contains("elsewhere")){
                  window.location.replace("detailpages/elsewhere.html");
              }
            })

              //detail page for gasoline (downtown)
              coffeeContainer.addEventListener("click", function createPage(){
                if(coffeeContainer.classList.contains("gasoline")){
                    window.location.replace("detailpages/gasoline.html");
                }
              })

                //detail page for saturdays (downtown)
             coffeeContainer.addEventListener("click", function createPage(){
              if(coffeeContainer.classList.contains("saturdays")){
                  window.location.replace("detailpages/saturdays.html");
              }
            })

              //detail page for leon dore (downtown)
              coffeeContainer.addEventListener("click", function createPage(){
                if(coffeeContainer.classList.contains("leon_dore")){
                    window.location.replace("detailpages/leondore.html");
                }
              })

                //detail page for ninth st (downtown)
             coffeeContainer.addEventListener("click", function createPage(){
              if(coffeeContainer.classList.contains("ninth_street")){
                  window.location.replace("detailpages/ninth.html");
              }
            })

  //detail page for velvette (downtown)
  coffeeContainer.addEventListener("click", function createPage(){
    if(coffeeContainer.classList.contains("velvette")){
        window.location.replace("detailpages/velvette.html");
    }
  })

    //detail page for lazy llama (downtown)
    coffeeContainer.addEventListener("click", function createPage(){
      if(coffeeContainer.classList.contains("lazy_llama")){
          window.location.replace("detailpages/lazyllama.html");
      }
    })


      //detail page for downtown coffee (downtown)
      coffeeContainer.addEventListener("click", function createPage(){
        if(coffeeContainer.classList.contains("downtown_coffee")){
            window.location.replace("detailpages/downtowncoffee.html");
        }
      })

        //detail page for happy bones (downtown)
        coffeeContainer.addEventListener("click", function createPage(){
          if(coffeeContainer.classList.contains("happy_bones")){
              window.location.replace("detailpages/happybones.html");
          }
        })

          //detail page for black star (downtown)
          coffeeContainer.addEventListener("click", function createPage(){
            if(coffeeContainer.classList.contains("black_star")){
                window.location.replace("detailpages/blackstar.html");
            }
          })

            //detail page for kettl (downtown)
            coffeeContainer.addEventListener("click", function createPage(){
              if(coffeeContainer.classList.contains("kettl")){
                  window.location.replace("detailpages/kettl.html");
              }
            })

              //detail page for kobrick (downtown)
              coffeeContainer.addEventListener("click", function createPage(){
                if(coffeeContainer.classList.contains("kobrick")){
                    window.location.replace("detailpages/kobrick.html");
                }
              })

                //detail page for blue spoon (downtown)
             coffeeContainer.addEventListener("click", function createPage(){
              if(coffeeContainer.classList.contains("blue_spoon")){
                  window.location.replace("detailpages/bluespoon.html");
              }
            })

              //detail page for birch (downtown)
              coffeeContainer.addEventListener("click", function createPage(){
                if(coffeeContainer.classList.contains("birch")){
                    window.location.replace("detailpages/birch.html");
                }
              })


                //detail page for kam hing (downtown)
             coffeeContainer.addEventListener("click", function createPage(){
              if(coffeeContainer.classList.contains("kam_hing")){
                  window.location.replace("detailpages/kamhing.html");
              }
            })

  //detail page for whistle (downtown)
  coffeeContainer.addEventListener("click", function createPage(){
    if(coffeeContainer.classList.contains("whistle")){
        window.location.replace("detailpages/whistle.html");
    }
  })
          
    //detail page for ole (downtown)
    coffeeContainer.addEventListener("click", function createPage(){
      if(coffeeContainer.classList.contains("ole")){
          window.location.replace("detailpages/ole.html");
      }
    })

      //detail page for merriweather (downtown)
      coffeeContainer.addEventListener("click", function createPage(){
        if(coffeeContainer.classList.contains("merriweather")){
            window.location.replace("detailpages/merriweather.html");
        }
      })

        //detail page for mudpark (downtown)
        coffeeContainer.addEventListener("click", function createPage(){
          if(coffeeContainer.classList.contains("mudpark")){
              window.location.replace("detailpages/mudpark.html");
          }
        })

          //detail page for starbucks (downtown)
          coffeeContainer.addEventListener("click", function createPage(){
            if(coffeeContainer.classList.contains("starbucks")){
                window.location.replace("detailpages/starbucks.html");
            }
          })

           //detail page for oslo (downtown)
           coffeeContainer.addEventListener("click", function createPage(){
            if(coffeeContainer.classList.contains("oslo")){
                window.location.replace("detailpages/oslo.html");
            }
          })

            //detail page for rebel (downtown)
            coffeeContainer.addEventListener("click", function createPage(){
              if(coffeeContainer.classList.contains("rebel")){
                  window.location.replace("detailpages/rebel.html");
              }
            })
  
             //detail page for chai (downtown)
             coffeeContainer.addEventListener("click", function createPage(){
              if(coffeeContainer.classList.contains("chai_spot")){
                  window.location.replace("detailpages/chai.html");
              }
            })

           //detail page for CLIPPER (bronx)
                   coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("clipper")){
                        window.location.replace("detailpages/clipper.html");
                    }
                  })

             //detail page for KAIGO (bronx)
                   coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("kaigo")){
                        window.location.replace("detailpages/kaigo.html");
                    }
                  })    

                  //detail page for BRC 1 (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("brooklyn_roasting_one")){
                        window.location.replace("detailpages/brooklynroastingone.html");
                    }
                  })

                  //detail page for OXALIS (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("oxalis")){
                        window.location.replace("detailpages/oxalis.html");
                    }
                  })

                  //detail page for WEEKENDS (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("weekends")){
                        window.location.replace("detailpages/weekends.html");
                    }
                  })
       
                  //detail page for VINEAPPLE (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("vineapple")){
                        window.location.replace("detailpages/vineapple.html");
                    }
                  })

                  //detail page for BAKERI (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("bakeri")){
                        window.location.replace("detailpages/bakeri.html");
                    }
                  })
       
                  //detail page for DEVOCION (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("devocion")){
                        window.location.replace("detailpages/devocion.html");
                    }
                  })
       
       
                  //detail page for BRC 2 (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("brooklyn_roasting_two")){
                        window.location.replace("detailpages/brooklynroastingtwo.html");
                    }
                  })
       
                  //detail page for QAHWAH (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("qahwah")){
                        window.location.replace("detailpages/qahwah.html");
                    }
                  })

                  //detail page for PARLOR (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("parlor")){
                        window.location.replace("detailpages/parlor.html");
                    }
                  })

                  //detail page for BEEPUBLIC (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("beepublic")){
                        window.location.replace("detailpages/beepublic.html");
                    }
                  })

                  //detail page for BITTERSWEET (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("bittersweet")){
                        window.location.replace("detailpages/bittersweet.html");
                    }
                  })
       
                  //detail page for ABSOLUTE (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("absolute")){
                        window.location.replace("detailpages/absolute.html");
                    }
                  })

                  //detail page for PARTNERS (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("partners")){
                        window.location.replace("detailpages/partners.html");
                    }
                  })

                  //detail page for ABOUT (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("about")){
                        window.location.replace("detailpages/about.html");
                    }
                  })

                  //detail page for WHITE NOISE (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("white_noise")){
                        window.location.replace("detailpages/whitenoise.html");
                    }
                  })

                  //detail page for FEED (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("feed")){
                        window.location.replace("detailpages/feed.html");
                    }
                  })

                  //detail page for GREGORYS (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("gregorys")){
                        window.location.replace("detailpages/gregorys.html");
                    }
                  })

                  //detail page for BLACK FLAMINGO (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("black_flamingo")){
                        window.location.replace("detailpages/blackflamingo.html");
                    }
                  })

                  //detail page for BLUESTONE (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("bluestone")){
                        window.location.replace("detailpages/bluestone.html");
                    }
                  })

                  //detail page for PPL (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("ppl")){
                        window.location.replace("detailpages/ppl.html");
                    }
                  })

                  //detail page for VARIETY (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("variety")){
                        window.location.replace("detailpages/variety.html");
                    }
                  })

                  //detail page for VOLKAN (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("volkan")){
                        window.location.replace("detailpages/volkan.html");
                    }
                  })

                  //detail page for copper (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("copper_mug")){
                        window.location.replace("detailpages/coppermug.html");
                    }
                  })

                  //detail page for LITTLE SWEET (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("little_sweet")){
                        window.location.replace("detailpages/littlesweer.html");
                    }
                  })

                  //detail page for JOE (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("joe")){
                        window.location.replace("detailpages/joe.html");
                    }
                  })

                  //detail page for KITTEN (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("kitten")){
                        window.location.replace("detailpages/kitten.html");
                    }
                  })

                  //detail page for OUT OF OFFICE (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("out_of_office")){
                        window.location.replace("detailpages/outofoffice.html");
                    }
                  })

                  //detail page for HUNGRY GHOST (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("hungry_ghost")){
                        window.location.replace("detailpages/hungryghost.html");
                    }
                  })

                  //detail page for UPRIGHT (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("upright")){
                        window.location.replace("detailpages/upright.html");
                    }
                  })

                  //detail page for ELEVA (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("eleva")){
                        window.location.replace("detailpages/eleva.html");
                    }
                  })

                  //detail page for HVRMINN (bronx)
                  coffeeContainer.addEventListener("click", function createPage(){
                    if(coffeeContainer.classList.contains("hvrminn")){
                        window.location.replace("detailpages/hvrminn.html");
                    }
                  })


        //get filter field from airtable 
        //loop through array and add each genre as a class to container 
        var categoryFilter = coffee.fields.filter;
        categoryFilter.forEach(function(categoryGroup){
          coffeeContainer.classList.add(categoryGroup)
        })

        //add event Listener to filter and add active class to coffee
        var categoryGroupAesthetic = document.querySelector('.js-aesthetic');
        categoryGroupAesthetic.addEventListener("click", function(){

          if (coffeeContainer.classList.contains("aesthetic")){
            coffeeContainer.style.background = "#f598b2";
          } else {
            coffeeContainer.style.background = "transparent";
          }
        })

        //add event Listener to filter for midtown 
        var categoryGroupVegan= document.querySelector('.js-vegan');
        categoryGroupVegan.addEventListener("click", function(){

          if (coffeeContainer.classList.contains("vegan")){
            coffeeContainer.style.background = "#58bf66";
          } else {
            coffeeContainer.style.background = "transparent";
          }
        })

        //add event Listener to filter for downtown
        var categoryGroupDog = document.querySelector('.js-dog');
        categoryGroupDog.addEventListener("click", function(){

          if (coffeeContainer.classList.contains("dog_friendly")){
            coffeeContainer.style.background = "#26cdeb";
          } else {
            coffeeContainer.style.background = "transparent";
          }
        })

        //add event Listener to filter for brooklyn 
        var categoryGroupEthical= document.querySelector('.js-ethical');
        categoryGroupEthical.addEventListener("click", function(){

          if (coffeeContainer.classList.contains("ethical")){
            coffeeContainer.style.background = "#f5d473";
          } else {
            coffeeContainer.style.background = "transparent";
          }
        })

        //add event Listener to filter for not coffee category 
        var categoryGroupMoreThanCoffee= document.querySelector('.js-morethancoffee');
        categoryGroupMoreThanCoffee.addEventListener("click", function(){

          if (coffeeContainer.classList.contains("more_than_coffee")){
            coffeeContainer.style.background = "#ff392b";
          } else {
            coffeeContainer.style.background = "transparent";
          }
        })

        //add event Listener to filter for poc owned category 
        var categoryGroupPoc= document.querySelector('.js-poc');
        categoryGroupPoc.addEventListener("click", function(){

          if (coffeeContainer.classList.contains("poc_owned")){
            coffeeContainer.style.background = "#d7bcf5";
          } else {
            coffeeContainer.style.background = "transparent";
          }
        })

         //add event Listener to filter for woman owned category 
         var categoryGroupWoman= document.querySelector('.js-woman');
         categoryGroupWoman.addEventListener("click", function(){
 
           if (coffeeContainer.classList.contains("woman_owned")){
             coffeeContainer.style.background = "#ed2da0";
           } else {
             coffeeContainer.style.background = "transparent";
           }
         })

        // //add event Listener for resetting filter 
        // var filterReset = document.querySelector('.js-reset')
        // filterReset.addEventListener("click", function(){
        //   coffeeContainer.style.background = "transparent";
        
        // })

        
        
         
 

    
      
        

  
  });
}


  