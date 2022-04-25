<template>
    <q-page padding>
        <div class="column center justify-center box" style="margin-top: 10%; width: 80%">

            <q-input v-model="inputValue" @update:model-value="gett" filled type="search" textfield="grey-1"
                label-color="grey-1" standout="grey-1" :input-style="{ color: 'white' }" bg-color="green-6"
                debounce="1000" label="SEARCH USER FROM GITHUB API">
            </q-input>

            <!-- <div v-if="inputValue">
                <ul>
                    <li @click="selectItem(user)" v-for="(user, index) in filteredUser" :key="`user-${index}`">
                        <q-item clickable v-ripple>
                            <q-item-section side>
                                <q-avatar rounded size="65px">
                                    <img :src="user.avatar_url" />
                                </q-avatar>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>{{ user.login }}</q-item-label>
                                <q-item-label>{{ items.login }}</q-item-label>
                                <q-item-label>{{ total }}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </li>
                </ul>

            </div> -->
            <ul>
                <li @click="selectItem(user)" v-for="(user, index) in filteredUser" :key="`user-${index}`">
                    <q-item clickable v-ripple>
                        <q-item-section side>
                            <q-avatar rounded size="65px">
                                <img :src="user.avatar_url" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label></q-item-label>
                        </q-item-section>
                    </q-item>
                </li>
            </ul>


            <div class="container">
                <!-- <div class="table-container" style="color:aliceblue">

                    <ul v-for="(item, index) in userArray" :key="`item-${index}`">
                        <li>
                            {{ items[index] }}







                        </li>





                    </ul>
                    {{ avatar }}

                </div> -->
            </div>
        </div>
        <ul style="color: white;">
            <li v-for="(user, index) in userArray" :key="`item-${index}`">
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
            avatar: "",
            isVisible: false,
            selectedItem: null,
            selectedValue: null,
            total: "",

        };
    },
    methods: {
        // onValueChange(aaaaa) {
        //     this.$router.push({ name: 'userDetails', params: { login: this.selectedValue.login } })
        // },
        // selectItem(user) {
        //     this.selectedItem = user;
        //     console.log(user)
        //     this.$router.push({ name: 'userDetails', params: { login: this.selectedItem.login } })
        // },
        gett() {
            fetch(`https://api.github.com/search/users?q=${this.inputValue}`)
                .then(res => res.json())
                .then((json) => {

                    // this.total = json.total_count;
                    this.userArray = json.items;
                    console.log(json.items);


                });
        },

    },
    // computed: {
    //     filteredUser() {
    //         const query = this.inputValue.toLowerCase();
    //         if (this.inputValue === "") {
    //             return this.userArray;
    //         }
    //         return this.userArray.filter((user) => {
    //             return Object.values(user).some((word) =>
    //                 String(word).toLocaleLowerCase().includes(query)
    //             );
    //         })
    //     },
    // },
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