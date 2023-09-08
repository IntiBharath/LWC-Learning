public with sharing class MapControllerLwc {
    @AuraEnabled(cacheable=true)
   public static List<Account> getAccounts(){
    return [select Id,Name,Description,BillingStreet,BillingCountry,BillingCity,BillingState,BillingPostalCode FROM Account ORDER BY Name Limit 10];
   }
}
