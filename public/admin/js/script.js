// Button status
const buttonStatus = document.querySelectorAll("[button-status]");
if (buttonStatus.length > 0) {
    buttonStatus.forEach(button => {
        let url = new URL(window.location.href);
        // console.log(url);

        button.addEventListener('click', () => {
            const status = button.getAttribute("button-status");
            // console.log(status);
            if (status) {
                url.searchParams.set("status", status);
            } else {
                url.searchParams.delete("status");
            }
            // console.log(url.href);

            window.location.href = url.href;
        });
    });
}

// Form search
const formSearch = document.querySelector("#form-search");
if (formSearch) {
    let url = new URL(window.location.href);
    formSearch.addEventListener("submit", (e) => {
        e.preventDefault();
        const keyword = e.target.elements.keyword.value
        // console.log(keyword);
        if (keyword) {
            url.searchParams.set("keyword", keyword);
        } else {
            url.searchParams.delete("keyword");
        }
        window.location.href = url.href;
    });
}
// End Form search