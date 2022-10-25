<template>
  <Layout>
    <section>
      <p v-if="loading">Loading</p>
      <p v-if="error">{{ error.message }}</p>
      <div class="pt-10 md:pt-0 grid grid-cols-1 lg:grid-cols-2 gap-x-16 xl:gap-x-48 gap-y-32 justify-items-center lg:p-24 ">
        <Card v-if="projects" v-for="(project, index) in projects" :key="index"
          class="w-full md:w-4/5 lg:w-full shadow-xl p-5 h-[400px] rounded-xl">
          <template #title>
            {{ project.title }}
          </template>
          <template #subtitle>
            {{ project.due_date }}
          </template>
          <template #content class="a">
            <p class="text-gray-400 h-[110px]">{{ project.description }}</p>
          </template>
          <template #footer>
            <div class="flex justify-between mb-2">
              <span>Project Progress </span>
              <span>{{ project.progress }}%</span>
            </div>
            <ProgressBar :value="project.progress" class="rounded-lg bg-green-100"/>
          </template>
        </Card>
      </div>
    </section>
  </Layout>
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import Card from 'primevue/card'
  import ProgressBar from 'primevue/progressbar'
  import { useProjectsStore } from '../stores/projects'
  const { projects, loading, error } = storeToRefs(useProjectsStore())
  const { fetchProjects } = useProjectsStore()

  fetchProjects()
</script>
