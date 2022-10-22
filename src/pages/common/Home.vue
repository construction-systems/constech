<template>
  <Layout>
    <section>
      <p v-if="loading">Loading</p>
      <div v-if="projects">

      </div>
    </section>
  </Layout>
</template>

<script>
import { useProjectsStore } from "../../stores/projects";
import { storeToRefs } from "pinia";

const { projects, loading, error } = storeToRefs(useProjectsStore())
const { fetchProjects } = useProjectsStore();

fetchProjects()
export default {
}
</script>
