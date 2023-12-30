function openPopup(type) {
    var popup = window.open("", "popup", "width=889px,height=898px");
    if (type === "image") {
      popup.document.write("<img src='img/cake.webp' alt='Image'>");
    } else if (type === "video") {
      popup.document.write("<video width='800px' height='600px' controls><source src='vid/rko.mp4' type='video/mp4'></video>");
    } else if (type === "text") {
      popup.document.write("<p style='background-color:purple;color:pink;font-size:25px;'>You me the gas station. what meal are we having? Gas station sushi. Hell yes. Uh oh there was a roofy in our gas station sushi. We wake up in a sewer full of fish. Horny fish. What does that mean? Fish orgy. The stench draws in a bear. Bear fight? Bare fists? Bare… Naked? I think so! We befriend the bear after beating it into a brawl. We ride it into a chucky cheese. Dance dance revolution! Revolution? Over throw the government? I think so! I black out again. I wake up and do a line. I white out, which i didnt even know could happen. I reincarnate as jesus. I turn into a jet and fly into the sun. I wake up and smoke a joint. I green out?? I wake up and i am the sun?? Oh no! Looks like the meth is kicking ijsjnjðommsooskauaajs rge snAAA AAAAAA AAAAAA.</p>");
    } else if (type === "meme") {
      popup.document.write("<a href='https://www.google.com/search?sca_esv=594589735&sxsrf=AM9HkKkF2a1Wl2tgi_iI9iRklCo4mcpJmA:1703939477922&q=randy+orton+memes&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjembOalbeDAxVUUqQEHfjqDMgQ0pQJegQICxAB&biw=1482&bih=958'> <p style='font-size:35px;'>what's this? :o</p> </a>");
    }
    popup.document.write("<button style='color:pink;background-color: purple;border: none;width: 120px;height: 70px;' onclick='window.close()'>Close</button>");
  }