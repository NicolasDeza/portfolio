<template>
  <section class="py-24 sm:py-32">
    <div class="w-full max-w-4xl mx-auto px-4 sm:px-6">
      <h1 class="text-3xl sm:text-4xl font-medium mb-8">
        Politique de confidentialité
      </h1>

      <div class="space-y-8 text-white/70 leading-relaxed">
        <!-- 1. Responsable -->
        <div>
          <h2 class="text-xl font-medium text-white mb-3">
            1. Responsable du traitement
          </h2>
          <p>
            Nicolas Deza<br />
            Développeur web indépendant<br />
            Email : nicolasdeza@hotmail.be<br />
            Site web : nicolasdeza.com
          </p>
        </div>

        <!-- 2. Données collectées -->
        <div>
          <h2 class="text-xl font-medium text-white mb-3">
            2. Données collectées
          </h2>
          <p class="mb-3">
            Lors de l'utilisation du formulaire de contact, nous collectons les
            données suivantes :
          </p>
          <ul class="list-disc list-inside space-y-1 ml-4">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Message</li>
          </ul>
        </div>

        <!-- 3. Finalité -->
        <div>
          <h2 class="text-xl font-medium text-white mb-3">
            3. Finalité du traitement
          </h2>
          <p>
            Les données collectées sont utilisées uniquement pour répondre à vos
            demandes de contact et échanger sur d'éventuels projets de
            collaboration.
          </p>
        </div>

        <!-- 4. Base légale -->
        <div>
          <h2 class="text-xl font-medium text-white mb-3">4. Base légale</h2>
          <p>
            Le traitement de vos données repose sur votre consentement explicite
            lors de l'envoi du formulaire de contact (article 6.1.a du RGPD).
          </p>
        </div>

        <!-- 5. Durée -->
        <div>
          <h2 class="text-xl font-medium text-white mb-3">
            5. Durée de conservation
          </h2>
          <p>
            Vos données sont conservées pendant une durée maximale de 1 an à
            compter de notre dernier échange, sauf obligation légale de
            conservation plus longue.
          </p>
        </div>

        <!-- 6. Destinataires -->
        <div>
          <h2 class="text-xl font-medium text-white mb-3">
            6. Destinataires des données
          </h2>
          <p class="mb-3">Vos données sont uniquement accessibles à :</p>
          <ul class="list-disc list-inside space-y-1 ml-4">
            <li>Nicolas Deza (responsable du site)</li>
            <li>
              O2switch (hébergeur du site, soumis à des obligations de
              confidentialité)
            </li>
          </ul>
          <p class="mt-3">
            Aucune donnée n'est transmise à des tiers à des fins commerciales.
          </p>
        </div>

        <!-- 7. Sécurité -->
        <div>
          <h2 class="text-xl font-medium text-white mb-3">7. Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles
            appropriées pour protéger vos données contre tout accès non
            autorisé, perte ou destruction (connexion HTTPS, serveur sécurisé).
          </p>
        </div>

        <!-- 8. Vos droits -->
        <div>
          <h2 class="text-xl font-medium text-white mb-3">8. Vos droits</h2>
          <p class="mb-3">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul class="list-disc list-inside space-y-1 ml-4">
            <li>Droit d'accès à vos données personnelles</li>
            <li>Droit de rectification en cas de données inexactes</li>
            <li>Droit à l'effacement ("droit à l'oubli")</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité de vos données</li>
            <li>Droit d'opposition au traitement</li>
            <li>Droit de retirer votre consentement à tout moment</li>
          </ul>
          <p class="mt-3">
            Pour exercer ces droits, contactez-nous à :
            <a
              href="mailto:nicolasdeza@hotmail.be"
              class="text-white hover:underline"
            >
              nicolasdeza@hotmail.be
            </a>
          </p>
        </div>

        <!-- 9. Contact -->
        <div>
          <h2 class="text-xl font-medium text-white mb-3">9. Contact</h2>
          <p>
            Pour toute question concernant cette politique de confidentialité ou
            l'utilisation de vos données personnelles, vous pouvez nous
            contacter à :
            <a
              href="mailto:nicolasdeza@hotmail.be"
              class="text-white hover:underline"
            >
              nicolasdeza@hotmail.be
            </a>
          </p>
          <p class="mt-3">
            Vous avez également le droit d'introduire une réclamation auprès de
            l'Autorité de protection des données (APD) en Belgique si vous
            estimez que vos droits ne sont pas respectés.
          </p>
        </div>

        <!-- 10. Modifications -->
        <div>
          <h2 class="text-xl font-medium text-white mb-3">
            10. Modifications de la politique
          </h2>
          <p>
            Cette politique de confidentialité peut être modifiée à tout moment.
            La version la plus récente est toujours disponible sur cette page.
          </p>
          <p class="mt-3 text-sm text-white/50">
            Dernière mise à jour : {{ new Date().toLocaleDateString("fr-BE") }}
          </p>
        </div>
      </div>

      <!-- Bouton retour -->
      <div class="mt-12">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition"
        >
          ← Retour à l'accueil
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
