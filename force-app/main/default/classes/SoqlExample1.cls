public with sharing class SoqlExample1 {
    @AuraEnabled(Cacheable=true)
    public static List<Account> sortAs() {
        return [select Id,Name,Phone from Account order by Name];
    }
    @AuraEnabled(Cacheable=true)
    public static List<Account> setLimit(){
        return [select Id,Name,Phone from Account limit 10];
    }
    @AuraEnabled(Cacheable=true)
    public static List<Account> offSet(){
        return [select Id,Name,Phone from Account offset 5];
    }
}
