<template>
    <q-page padding>
        <div class="column center justify-center box" style="margin-top: 10%; width: 80%">

            <q-input v-model="inputValue" @update:model-value="getUser" filled type="search" textfield="grey-1"
                label-color="grey-1" standout="grey-1" :input-style="{ color: 'white' }" bg-color="green-6"
                debounce="1000" label="SEARCH USER FROM GITHUB API">
            </q-input>

            <div v-if="inputValue">
                <ul style="color: white;">
                    Results: {{ total }}
                    <li v-for="(user, index) in userArray" :key="`item-${index}`" @click="selectItem(user)">
                        <q-item clickable v-ripple>
                            <q-item-section side>
                                <q-avatar rounded size="65px">
                                    <img :src="user.avatar_url" />
                                </q-avatar>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label> {{ user.login }}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </li>
                </ul>
            </div>
        </div>
    </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: 'FinderV3',
    data() {
        return {
            inputValue: "",
            userArray: "",
            isVisible: false,
            selectedItem: null,
            selectedValue: null,
            total: "",
        };
    },
    methods: {

        selectItem(user) {
            this.selectedItem = user;
            console.log(user)
            this.$router.push({ name: 'userDetails', params: { login: this.selectedItem.login } })
        },
        getUser() {
            fetch(`https://api.github.com/search/users?q=${this.inputValue}`)
                .then(res => res.json())
                .then((json) => {
                    this.total = json.total_count;
                    this.userArray = json.items;
                    console.log(json.items);
                });
        },
    },
    props: {
        login: {
            required: true,
            type: String,
        }
    },
})
</script>  

<style scoped>
input,
select,
textarea {
    color: white;
}

ul,
li {
    list-style-type: none;
    list-style: none outside none;
    margin: auto;
    padding-left: 0;
}

.element {
    display: inline-block;
    width: 600px;
    padding: 5px;
    margin: 5px auto;
    border-color: azure;
}

.center {
    display: flex;
    justify-content: space-between;
}

.box {
    width: 100%;
    padding: 12px 20px;
    margin: auto auto;
    box-sizing: border-box;
}
</style>