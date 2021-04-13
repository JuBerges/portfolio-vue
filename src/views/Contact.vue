<template>
    <div>
        <div class="help pt-11 min-h-screen">
            <div class="flex items-center">
                <div class="container mx-auto">
                    <div class="glass w-full sm:w-3/4 mx-auto my-10 bg-blue-900 bg-opacity-70 border border-blue-500 p-5 rounded-md shadow-sm">
                        <div class="text-center">
                            <h1 class="my-3 text-3xl font-semibold text-gray-200 uppercase">Contactez moi</h1>
                            <p class=" text-gray-100">Afin de discuter de votre projet.</p>
                        </div>
                        <div class="m-7">
                            <form action="https://api.web3forms.com/submit" method="POST" id="form">
                                <input type="hidden" name="apikey" value="9393c877-26c2-4c53-9da3-fa7e5c1aeb52" />
                                <input type="hidden" name="subject" value="Nouveau message sur votre portfolio" />

                                <div class="mb-6">
                                    <label for="name" class="block mb-2 text-sm text-gray-100 font-bold">Nom et prénom :</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Nom et Prénom"
                                        required
                                        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring bg-blue-700 bg-opacity-50 text-white placeholder-gray-400 border-blue-600 focus:ring-gray-900 focus:border-gray-500"
                                    />
                                </div>
                                <div class="mb-6">
                                    <label for="email" class="block mb-2 text-sm text-gray-100 font-bold">Email :</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="ex: you@company.com"
                                        required
                                        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring bg-blue-700 bg-opacity-50 text-white placeholder-gray-400 border-blue-600 focus:ring-gray-900 focus:border-gray-500"
                                    />
                                </div>
                                <div class="mb-6">
                                    <label for="phone" class="text-sm text-gray-100 font-bold">Téléphone (facultatif) : </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        placeholder="Votre numéro"
                                        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring bg-blue-700 bg-opacity-50 text-white placeholder-gray-400 border-blue-600 focus:ring-gray-900 focus:border-gray-500"
                                    />
                                </div>
                                <div class="mb-6">
                                    <label for="message" class="block mb-2 text-sm text-gray-100 font-bold">Message :</label>

                                    <textarea
                                        rows="5"
                                        name="message"
                                        id="message"
                                        placeholder="Votre Message"
                                        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring bg-blue-700 bg-opacity-50 text-white placeholder-gray-400 border-blue-600 focus:ring-gray-900 focus:border-gray-500"
                                        required
                                    ></textarea>
                                </div>
                                <div class="mb-6 flex justify-center">
                                    <the-button>Envoyer</the-button>
                                </div>
                                <p class="text-base text-center" id="result"></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <the-footer></the-footer>
    </div>
</template>
<script>
import TheButton from "../components/TheButton.vue";
import TheContact from "../components/TheContact.vue";
import TheFooter from "../components/TheFooter.vue";
export default {
    name: "Contact",
    components: { TheContact, TheFooter, TheButton },
    data() {
        return {
            toggle: false,
        };
    },
    mounted() {
        const form = document.getElementById("form");
        const result = document.getElementById("result");

        form.addEventListener("submit", function(e) {
            const formData = new FormData(form);
            e.preventDefault();
            var object = {};
            formData.forEach((value, key) => {
                object[key] = value;
            });
            var json = JSON.stringify(object);
            result.innerHTML = "Please wait...";

            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            })
                .then(async (response) => {
                    let json = await response.json();
                    if (response.status == 200) {
                        result.innerHTML = "Votre message à bien été envoyé";
                        result.classList.remove("text-gray-500");
                        result.classList.add("text-white");
                    } else {
                        console.log(response);
                        result.innerHTML = json.message;
                        result.classList.remove("text-gray-500");
                        result.classList.add("text-red-500");
                    }
                })
                .catch((error) => {
                    console.log(error);
                    result.innerHTML = "Il semble y avoir un problême, veuillez retenter plus tard svp!";
                })
                .then(function() {
                    form.reset();
                    setTimeout(() => {
                        result.style.display = "none";
                    }, 5000);
                });
        });
    },
};
</script>
