
const but = document.getElementById("send")

const answer_box = document.getElementById("answer_box")

but.addEventListener("click", () => {
    console.log("Информация:")
    let name = document.getElementById("name").value

    

    let email = document.getElementById("email").value
    let comment = document.getElementById("comment").value

    let index = document.getElementById("theme").options.selectedIndex
    let theme = document.getElementById("theme").options[index].text
    // console.log(index)

    console.log(name)
    console.log(email)
    console.log(theme)
    console.log(comment)

    if (!name || !email || !comment || !theme) {
        alert("Заполните все поля!")
    }
    if (name.length < 3) {
        alert("NO!!!!!!!")
    }



    answer_box.innerHTML = `<p>Name: ${name}</p>
                            <p>Email: ${email}</p>
                            <p>Theme: ${theme}</p>
                            <p>Comment: ${comment}</p>`

})



