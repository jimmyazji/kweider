<template>
  <Head :title="$t('manage products')" />
  <header class="bg-almond-200 shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">{{ $t("manage products") }}</h2>
    </div>
  </header>
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div class="p-6 bg-white border-b border-gray-200">
          <form @submit.prevent="submit">
            <div class="grid md:grid-cols-2 gap-2">
              <div>
                <Input
                  id="en_name"
                  type="text"
                  class="block mt-1 w-full"
                  v-model="form.en_name"
                  :placeholder="$t('product name en')"
                  autofocus
                  autocomplete="en_name"
                  :class="{ 'input-error': $page.props.errors.en_name }"
                />
                <div
                  v-if="$page.props.errors.en_name"
                  v-text="$page.props.errors.en_name"
                  class="text-error text-sm ml-2 mt-1"
                ></div>
              </div>
              <div>
                <Input
                  id="ar_name"
                  type="text"
                  v-model="form.ar_name"
                  class="block mt-1 w-full"
                  autocomplete="ar_name"
                  :placeholder="$t('product name ar')"
                  :class="{ 'input-error': $page.props.errors.ar_name }"
                />
                <div
                  v-if="$page.props.errors.ar_name"
                  v-text="$page.props.errors.ar_name"
                  class="text-error text-sm ml-2 mt-1"
                ></div>
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-2">
              <Input
                id="quantity"
                type="number"
                v-model="form.quantity"
                class="block mt-1 w-full"
                autocomplete="quantity"
                :placeholder="$t('quantity')"
                :class="{ 'input-error': $page.props.errors.quantity }"
              />
              <div>
                <label
                  class="input input-bordered flex w-full mt-1 items-center px-5 cursor-pointer"
                  for="img"
                >
                  <span>{{ $t("upload image") }}</span>
                  <input id="img" type="file" class="sr-only" />
                </label>
                <div
                  v-if="$page.props.errors.image"
                  v-text="$page.props.errors.image"
                  class="text-error text-sm ml-2 mt-1"
                ></div>
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-2">
              <div>
                <select
                  id="cat_id"
                  class="block mt-1 w-full select select-bordered focus:border-transparent font-normal"
                  :class="{
                    'text-gray-500': !form.cat_id,
                    'select-error': $page.props.errors.cat_id,
                  }"
                  v-model="form.cat_id"
                  autocomplete="cat_id"
                >
                  <option disabled value>{{ $t("select category") }}</option>
                  <option
                    v-for="category in categories"
                    :key="category.id"
                    :value="category.id"
                  >{{ category.name }}</option>
                </select>
                <div
                  v-if="$page.props.errors.cat_id"
                  v-text="$page.props.errors.cat_id"
                  class="text-error text-sm ml-2 mt-1"
                ></div>
              </div>
              <div>
                <Input
                  id="weight"
                  type="number"
                  class="block mt-1 w-full"
                  v-model="form.weight"
                  :placeholder="$t('weight')"
                  autocomplete="weight"
                  :class="{ 'input-error': $page.props.errors.weight }"
                />
                <div
                  v-if="$page.props.errors.weight"
                  v-text="$page.props.errors.weight"
                  class="text-error text-sm ml-2 mt-1"
                ></div>
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-2">
              <div>
                <textarea
                  id="en_description"
                  class="block mt-1 w-full textarea h-24 textarea-bordered focus:border-transparent resize-none px-5"
                  autocomplete="en_description"
                  v-model="form.en_description"
                  :placeholder="$t('product desc en')"
                  :class="{ 'textarea-error': $page.props.errors.en_description }"
                />
                <div
                  v-if="$page.props.errors.en_description"
                  v-text="$page.props.errors.en_description"
                  class="text-error text-sm ml-2 mt-1"
                ></div>
              </div>
              <div>
                <textarea
                  id="ar_description"
                  v-model="form.ar_description"
                  class="block mt-1 w-full textarea h-24 textarea-bordered focus:border-transparent resize-none"
                  autocomplete="ar_description"
                  :placeholder="$t('product desc ar')"
                  :class="{ 'textarea-error': $page.props.errors.ar_description }"
                />
                <div
                  v-if="$page.props.errors.ar_description"
                  v-text="$page.props.errors.ar_description"
                  class="text-error text-sm ml-2 mt-1"
                ></div>
              </div>
            </div>
            <div class="grid sm:grid-cols-2 gap-2 my-2 mt-3">
              <div class="flex justify-center">
                <Checkbox :name="box" v-model="form.box" class="checkbox-primary" />
                <span class="mx-2 text-sm text-lonestar-700">{{ $t('box') }}</span>
              </div>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-2 sm:hidden">
                <Input
                  id="box_w"
                  type="number"
                  autocomplete="box_w"
                  v-model="form.box_w"
                  :disabled="!form.box"
                  :placeholder="$t('width')"
                  :class="{ 'input-error': $page.props.errors.box_w }"
                />
                <Input
                  id="box_l"
                  type="number"
                  autocomplete="box_l"
                  v-model="form.box_l"
                  :disabled="!form.box"
                  :placeholder="$t('length')"
                  :class="{ 'input-error': $page.props.errors.box_l }"
                />
                <Input
                  id="box_h"
                  type="number"
                  autocomplete="box_h"
                  v-model="form.box_h"
                  :disabled="!form.box"
                  :placeholder="$t('height')"
                  :class="{ 'input-error': $page.props.errors.box_h }"
                />
                <Input
                  id="box_q"
                  type="number"
                  autocomplete="box_q"
                  v-model="form.box_q"
                  :disabled="!form.box"
                  :placeholder="$t('quantity')"
                  :class="{ 'input-error': $page.props.errors.box_q }"
                />
                <Input
                  id="box_w_c"
                  type="number"
                  autocomplete="box_w_c"
                  v-model="form.box_w_c"
                  :class="{ 'input-error': $page.props.errors.box_w_c }"
                  :disabled="!form.box"
                  :placeholder="$t('clear weight')"
                />
                <Input
                  id="box_w_a"
                  type="number"
                  autocomplete="box_w_a"
                  v-model="form.box_w_a"
                  :class="{ 'input-error': $page.props.errors.box_w_a }"
                  :disabled="!form.box"
                  :placeholder="$t('actual weight')"
                />
              </div>
              <div class="flex justify-center">
                <Checkbox :name="package" v-model="form.package" class="checkbox-primary" />
                <span class="mx-2 text-sm text-lonestar-700">{{ $t('package') }}</span>
              </div>
            </div>
            <div class="grid sm:grid-cols-2 gap-2 mt-3">
              <div class="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-2">
                <Input
                  id="box_w"
                  type="number"
                  autocomplete="box_w"
                  v-model="form.box_w"
                  :disabled="!form.box"
                  :placeholder="$t('width')"
                  :class="{ 'input-error': $page.props.errors.box_w }"
                />
                <Input
                  id="box_l"
                  type="number"
                  autocomplete="box_l"
                  v-model="form.box_l"
                  :disabled="!form.box"
                  :placeholder="$t('length')"
                  :class="{ 'input-error': $page.props.errors.box_l }"
                />
                <Input
                  id="box_h"
                  type="number"
                  autocomplete="box_h"
                  v-model="form.box_h"
                  :disabled="!form.box"
                  :placeholder="$t('height')"
                  :class="{ 'input-error': $page.props.errors.box_h }"
                />
                <Input
                  id="box_q"
                  type="number"
                  autocomplete="box_q"
                  v-model="form.box_q"
                  :disabled="!form.box"
                  :placeholder="$t('quantity')"
                  :class="{ 'input-error': $page.props.errors.box_q }"
                />
              </div>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                <Input
                  id="pack_w"
                  type="number"
                  autocomplete="pack_w"
                  v-model="form.pack_w"
                  :disabled="!form.package"
                  :placeholder="$t('width')"
                  :class="{ 'input-error': $page.props.errors.pack_w }"
                />
                <Input
                  id="pack_l"
                  type="number"
                  autocomplete="pack_l"
                  v-model="form.pack_l"
                  :disabled="!form.package"
                  :placeholder="$t('length')"
                  :class="{ 'input-error': $page.props.errors.pack_l }"
                />
                <Input
                  id="pack_h"
                  type="number"
                  autocomplete="pack_h"
                  v-model="form.pack_h"
                  :disabled="!form.package"
                  :placeholder="$t('height')"
                  :class="{ 'input-error': $page.props.errors.pack_h }"
                />
                <Input
                  id="pack_q"
                  type="number"
                  autocomplete="pack_q"
                  v-model="form.pack_q"
                  :class="{ 'input-error': $page.props.errors.pack_q }"
                  :disabled="!form.package"
                  :placeholder="$t('quantity')"
                />
                <Input
                  id="pack_w_c"
                  type="number"
                  class="sm:hidden"
                  autocomplete="pack_w_c"
                  v-model="form.pack_w_c"
                  :class="{ 'input-error': $page.props.errors.pack_w_c }"
                  :disabled="!form.package"
                  :placeholder="$t('clear weight')"
                />
                <Input
                  id="pack_w_a"
                  type="number"
                  class="sm:hidden"
                  autocomplete="pack_w_a"
                  v-model="form.pack_w_a"
                  :class="{ 'input-error': $page.props.errors.pack_w_a }"
                  :disabled="!form.package"
                  :placeholder="$t('actual weight')"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-2 mt-1">
              <div class="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-2">
                <Input
                  id="box_w_c"
                  type="number"
                  autocomplete="box_w_c"
                  v-model="form.box_w_c"
                  :class="{ 'input-error': $page.props.errors.box_w_c }"
                  :disabled="!form.box"
                  :placeholder="$t('clear weight')"
                />
                <Input
                  id="box_w_a"
                  type="number"
                  autocomplete="box_w_a"
                  v-model="form.box_w_a"
                  :class="{ 'input-error': $page.props.errors.box_w_a }"
                  :disabled="!form.box"
                  :placeholder="$t('actual weight')"
                />
              </div>
              <div class="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-2">
                <Input
                  id="pack_w_c"
                  type="number"
                  autocomplete="pack_w_c"
                  v-model="form.pack_w_c"
                  :class="{ 'input-error': $page.props.errors.pack_w_c }"
                  :disabled="!form.package"
                  :placeholder="$t('clear weight')"
                />
                <Input
                  id="pack_w_a"
                  type="number"
                  autocomplete="pack_w_a"
                  v-model="form.pack_w_a"
                  :class="{ 'input-error': $page.props.errors.pack_w_a }"
                  :disabled="!form.package"
                  :placeholder="$t('actual weight')"
                />
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-1">
              <div>
                <div
                  v-if="$page.props.errors.box_w"
                  v-text="$page.props.errors.box_w"
                  class="text-error text-sm ml-2 mt-1"
                ></div>
                <div
                  v-if="$page.props.errors.box_l"
                  v-text="$page.props.errors.box_l"
                  class="text-error text-sm ml-2 mt-1"
                ></div>
                <div
                  v-if="$page.props.errors.box_h"
                  v-text="$page.props.errors.box_h"
                  class="text-error text-sm ml-2 mt-1"
                ></div>
                <div
                  v-if="$page.props.errors.box_q"
                  v-text="$page.props.errors.box_q"
                  class="text-error text-sm ml-2 mt-1"
                ></div>
                <div
                  v-if="$page.props.errors.box_w_c"
                  v-text="$page.props.errors.box_w_c"
                  class="text-error text-sm ml-2 mt-1"
                ></div>
                <div
                  v-if="$page.props.errors.box_w_a"
                  v-text="$page.props.errors.box_w_a"
                  class="text-error text-sm ml-2 mt-1"
                ></div>
              </div>
              <div>
                <div
                  v-if="$page.props.errors.pack_w"
                  v-text="$page.props.errors.pack_w"
                  class="text-error text-sm ml-2 mt-1"
                ></div>
                <div
                  v-if="$page.props.errors.pack_l"
                  v-text="$page.props.errors.pack_l"
                  class="text-error text-sm ml-2 mt-1"
                ></div>
                <div
                  v-if="$page.props.errors.pack_h"
                  v-text="$page.props.errors.pack_h"
                  class="text-error text-sm ml-2 mt-1"
                ></div>
                <div
                  v-if="$page.props.errors.pack_q"
                  v-text="$page.props.errors.pack_q"
                  class="text-error text-sm ml-2 mt-1"
                ></div>
                <div
                  v-if="$page.props.errors.pack_w_c"
                  v-text="$page.props.errors.pack_w_c"
                  class="text-error text-sm ml-2 mt-1"
                ></div>
                <div
                  v-if="$page.props.errors.pack_w_a"
                  v-text="$page.props.errors.pack_w_a"
                  class="text-error text-sm ml-2 mt-1"
                ></div>
              </div>
            </div>
            <div class="flex items-center justify-between mt-4">
              <Link
                :href="route('menu.index')"
                class="text-sm underline hover:text-lonestar-500 font-semibold mx-1"
              >{{ $t("back") }}</Link>
              <div>
                <Button
                  type="button"
                  class="px-5 mx-0.5"
                  :class="{ 'opacity-25': form.processing }"
                  @click.prevent="clear()"
                >{{ $t("clear") }}</Button>
                <Button
                  type="submit"
                  class="px-5 mx-0.5"
                  :class="{ 'opacity-25': form.processing }"
                  :disabled="form.processing"
                >{{ $t("submit") }}</Button>
              </div>
            </div>
          </form>

          <div class="overflow-x-auto mt-4">
            <table class="table w-full table-compact table-zebra text-lonestar-800" dir="ltr">
              <thead>
                <tr>
                  <th></th>
                  <th class colspan="6"></th>
                  <th colspan="6">
                    <div class="flex justify-center bg-almond-600 rounded">{{ $t('box') }}</div>
                  </th>
                  <th colspan="7">
                    <div class="flex justify-center bg-almond-600 rounded">{{ $t('package') }}</div>
                  </th>
                  <th></th>
                </tr>
                <tr>
                  <th></th>
                  <th>{{ $t("en name") }}</th>
                  <th>{{ $t("ar name") }}</th>
                  <th>{{ $t("en desc") }}</th>
                  <th>{{ $t("ar desc") }}</th>
                  <th>{{ $t("cat") }}</th>
                  <th>{{ $t("weight") }}</th>
                  <th>{{ $t("quantity") }}</th>
                  <th>{{ $t("width") }}</th>
                  <th>{{ $t("length") }}</th>
                  <th>{{ $t("height") }}</th>
                  <th>{{ $t("quantity") }}</th>
                  <th>{{ $t("clear weight") }}</th>
                  <th>{{ $t("actual weight") }}</th>
                  <th>{{ $t("width") }}</th>
                  <th>{{ $t("length") }}</th>
                  <th>{{ $t("height") }}</th>
                  <th>{{ $t("quantity") }}</th>
                  <th>{{ $t("clear weight") }}</th>
                  <th>{{ $t("actual weight") }}</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="products.length > 0" v-for="product in products" :key="product.id">
                  <td></td>
                  <td>{{ product.name.en }}</td>
                  <td>{{ product.name.ar }}</td>
                  <td>{{ product.description.en }}</td>
                  <td>{{ product.description.ar }}</td>
                  <td>{{ product.category }}</td>
                  <td>{{ product.weight ? product.weight : "-" }}</td>
                  <td>{{ product.quantity ? product.quantity : "-" }}</td>
                  <td>{{ product.box_w ? product.box_w : "-" }}</td>
                  <td>{{ product.box_l ? product.box_l : "-" }}</td>
                  <td>{{ product.box_h ? product.box_h : "-" }}</td>
                  <td>{{ product.box_q ? product.box_q : "-" }}</td>
                  <td>{{ product.box_w_c ? product.box_w_c : "-" }}</td>
                  <td>{{ product.box_w_a ? product.box_w_a : "-" }}</td>
                  <td>{{ product.pack_w ? product.pack_w : "-" }}</td>
                  <td>{{ product.pack_l ? product.pack_l : "-" }}</td>
                  <td>{{ product.pack_h ? product.pack_h : "-" }}</td>
                  <td>{{ product.pack_q ? product.pack_q : "-" }}</td>
                  <td>{{ product.pack_w_c ? product.pack_w_c : "-" }}</td>
                  <td>{{ product.pack_w_a ? product.pack_w_a : "-" }}</td>
                  <td>
                    <div class="flex justify-end">
                      <button @click="edit(product)">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          class="w-4 h-auto mx-0.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </button>
                      <button @click="destroy(product.id)">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="#DC143C"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          class="w-4 0h-auto"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr v-if="products.length === 0">
                  <td colspan="20">
                    <span class="flex justify-center">{{ $t("no results") }}</span>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th>{{ $t("en name") }}</th>
                  <th>{{ $t("ar name") }}</th>
                  <th>{{ $t("en desc") }}</th>
                  <th>{{ $t("ar desc") }}</th>
                  <th>{{ $t("cat") }}</th>
                  <th>{{ $t("weight") }}</th>
                  <th>{{ $t("quantity") }}</th>
                  <th>{{ $t("width") }}</th>
                  <th>{{ $t("length") }}</th>
                  <th>{{ $t("height") }}</th>
                  <th>{{ $t("quantity") }}</th>
                  <th>{{ $t("clear weight") }}</th>
                  <th>{{ $t("actual weight") }}</th>
                  <th>{{ $t("width") }}</th>
                  <th>{{ $t("length") }}</th>
                  <th>{{ $t("height") }}</th>
                  <th>{{ $t("quantity") }}</th>
                  <th>{{ $t("clear weight") }}</th>
                  <th>{{ $t("actual weight") }}</th>
                  <th></th>
                </tr>
                <tr>
                  <th></th>
                  <th class colspan="6"></th>
                  <th colspan="6">
                    <div class="flex justify-center bg-almond-600 rounded">{{ $t('box') }}</div>
                  </th>
                  <th colspan="7">
                    <div class="flex justify-center bg-almond-600 rounded">{{ $t('package') }}</div>
                  </th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import Input from "@/Components/Input.vue";
import Button from "@/Components/Button.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import Checkbox from "@/Components/Checkbox.vue";
import { ref } from "vue";

const form = useForm({
  en_name: "",
  ar_name: "",
  en_description: "",
  ar_description: "",
  weight: "",
  quantity: "",
  cat_id: "",
  box: false,
  box_l: "",
  box_w: "",
  box_h: "",
  box_q: "",
  box_w_c: "",
  box_w_a: "",
  package: false,
  pack_l: "",
  pack_w: "",
  pack_h: "",
  pack_q: "",
  pack_w_c: "",
  pack_w_a: "",
});
const prod_id = ref(null);
const edit = (prod) => {
  clear()
  prod_id.value = prod.id;
  form.en_name = prod.name.en;
  form.ar_name = prod.name.ar;
  form.weight = prod.weight;
  form.quantity = prod.quantity;
  form.cat_id = prod.cat_id;
  form.en_description = prod.description.en;
  form.ar_description = prod.description.ar;
  if (prod.box_l) {
    form.box = true;
    form.box_l = prod.box_l;
    form.box_w = prod.box_w;
    form.box_h = prod.box_h;
    form.box_q = prod.box_q;
    form.box_w_c = prod.box_w_c;
    form.box_w_a = prod.box_w_a;
  }
  if (prod.pack_l) {
    form.package = true;
    form.pack_l = prod.pack_l;
    form.pack_w = prod.pack_w;
    form.pack_h = prod.pack_h;
    form.pack_q = prod.pack_q;
    form.pack_w_c = prod.pack_w_c;
    form.pack_w_a = prod.pack_w_a;
  }
};
const submit = () => {
  if (!prod_id.value) {
    form.post(route('products.index'), {
      preserveScroll: true,
      onSuccess: () => clear(),
    })
  }
  else {
    form.post(route('products.update', prod_id.value), {
      preserveScroll: true,
      onSuccess: () => clear(),
    })
  }
};
const clear = () => {
  prod_id.value = null;
  form.reset();
};
const destroy = (id) => {
  Inertia.delete(`/products/${id}`, {
    onBefore: () =>
      confirm("Are you sure you want to delete this product? this cannot be undone"),
    preserveScroll: true,
  });
};
defineProps({
  categories: Object,
  products: Object,
});
</script>
