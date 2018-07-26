<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Gwent"/>

    <StackLayout>
      <Button class="btn btn-default" @tap="$router.push('/faction')">Contador de pontos</Button>
      <Button class="btn btn-default" @tap="$router.push('/cards')">Cartas</Button>
    </StackLayout>

  </Page>
</template>
