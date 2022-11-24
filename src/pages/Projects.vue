<template>
  <Layout>
    <section>
      <p v-if="loading">Loading</p>
      <p v-if="error">{{ error.message }}</p>
      <div class="mb-10 sticky top-0 z-10">
        <Card v-if="company">
          <template #title>
            Company: {{ company.name }}
          </template>
          <template #subtitle>
            Lima, Peru
          </template>
          <template #content class="text-ellipsis"> 
            {{ company.description }}
          </template>
        </Card>
      </div>
      <div
        class="pt-10 md:pt-0 grid grid-cols-1 lg:grid-cols-2 gap-x-16 xl:gap-x-48 gap-y-32 justify-items-center lg:p-24 ">
        <Card v-if="projects || projects.length > 1" v-for="(project, index) in projects" :key="index"
          class="w-full md:w-4/5 lg:w-full shadow-xl p-5 h-[450px] rounded-xl">
          <template #title>
            {{ project.title }}
          </template>
          <template #subtitle>
            {{ project.due_date }}
          </template>
          <template #content class="a">
            <p class="text-gray-400 h-[200px]">{{ project.description }}</p>
          </template>
          <template #footer>
            <div class="flex justify-between mb-2">
              <span> {{ $t("projects.card.progress") }} </span>
              <span>{{ project.progress }}%</span>
            </div>
            <ProgressBar :value="project.progress" class="rounded-lg bg-green-100" />
          </template>
        </Card>
        <div v-else>
          <p>No projects</p>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import Card from 'primevue/card'
import ProgressBar from 'primevue/progressbar'
import { useCompaniesStore } from '../stores/companies'

export default {
  components: {
    Card,
    ProgressBar
  },
  data() {
    return {
      company: null,
      projects: [],
      loading: false,
      error: null
    }
  },
  async beforeMount() {
    await this.store.fetchCompany()
    this.company = this.store.company
    this.projects = this.store.company.projects
  },
  setup() {
    const store = useCompaniesStore()
    return { store }
  }

}
</script>
