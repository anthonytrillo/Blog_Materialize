const d = document;

export function searchPosts(input, selector){
    d.addEventListener("keyup", (e) => {
        if(e.target.matches(input)){
            d.querySelectorAll(selector).forEach(element =>
                element.textContent.toLowerCase().includes(e.target.value)
                ? element.classList.remove("filter")
                : element.classList.add("filter")
            );
        }
    })
}

